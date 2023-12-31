import mongoose  from "mongoose";

const connectToDB = handler => async (req , res)=>{

    if(mongoose.connections[0].readyState){
        return handler(req , res)
    }

    await mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log('Database is connected successfully')
    }).catch((err)=>{
        console.log('Error in database connection : ',err);
    })

    return handler(req , res)
}

export default connectToDB ;