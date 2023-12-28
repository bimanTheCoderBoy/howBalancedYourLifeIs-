const User=require("../../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
class UserService{
  //get user
   static async getUser(id){
        try {
          const user= await User.findById(id)
          console.log(user);
          return user
        } catch (error) {
          console.error(error);
          throw new Error('Error getting user');
        }
   }
   //create user
   static async createUser(name,password,mail){
    try {
      const salt=10;
      let hashedPassword=await bcrypt.hash(`${password}`,salt);
        const user = new User({name,mail,password:hashedPassword});
        await user.save();
       const token= await loginUser({mail,password}); //loging in also
        return token;
      } catch (error) {
        throw new Error('Error creating user',error);
      }
   }

   static async loginUser(payload){
    const {mail,password}=payload;
    let user=await User.findOne({mail:mail});
    if(!user){throw new Error ('No such user')}
    const validPass=await bcrypt.compare(password,user.password);
    if (!validPass) {throw new Error ("Wrong password")};
    const token= jwt.sign({_id:user._id,mail:user.mail},process.env.JWTSECRET || "secret",{expiresIn:'7d'})
    return token
   }
}

module.exports=UserService;