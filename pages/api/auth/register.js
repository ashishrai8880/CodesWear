import connectToDB from "@/middleware/mongoose"
import User from "@/models/User";

const handler =  async (req , res)=>{

    if(req.method == 'POST'){

        let user =await  new User(req.body);
        await user.save();
        
        res.status(200).json({success : 'Saved successfully'})
    }
    else{
        res.status(400).json({error : 'Method is not allowed'});
    }
    
}

export default connectToDB(handler);

  