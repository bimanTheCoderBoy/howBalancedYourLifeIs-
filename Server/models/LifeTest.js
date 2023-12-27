const mongoose=require("mongoose")

const lifeTestSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    work:{
        type:{
            money:{type:Number,default:0},
            mission:{type:Number,default:0},
            growth:{type:Number,default:0},
        }
    },
    health:{
        type:{
            body:{type:Number,default:0},
            mind:{type:Number,default:0},
            soul:{type:Number,default:0},
        }
    },
    relation:{
        type:{
            romance:{type:Number, default:0},
            family:{type:Number,default:0},
            friend:{type:Number,default:0},
        }
    },
    date:{
        type:Date,
        default:Date.now()
    },

})

const LifeTest=mongoose.model('LifeTest',lifeTestSchema);

module.exports=LifeTest