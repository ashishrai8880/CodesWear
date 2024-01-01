import connectToDB from "@/middleware/mongoose"
import User from "@/models/User";

const handler =  async (req , res)=>{

    if(req.method == 'POST'){

        let user =await  User.findOne({email : req.body.email});
        if(!user){
            res.status(404).json({message : 'User does not found !'})
        }

        if(user.password !== req.body.password){
            res.status(404).json({message : 'Credentials does not match !'})
        }
        
        res.status(200).json({success : 'Logged In successfully' , user , token : '123234345'})
    }
    else{
        res.status(400).json({error : 'Method is not allowed'});
    }
    
}

export default connectToDB(handler);

  