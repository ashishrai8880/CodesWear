import Product from "@/models/Product"
import connectToDB from "@/middleware/mongoose"

const handler =  async (req , res)=>{

    if(req.method == 'PUT'){
        console.log('coming inside update')

        for(let i =0 ; i<req.body.length ; i++){

            await Product.findByIdAndUpdate(req.body[i]._id , req.body[i]);

        }

        res.status(200).json({success : 'Updated  successfully'})
    }
    else{
        res.status(400).json({error : 'Method is not allowed'});
    }
    
}

export default connectToDB(handler);

  