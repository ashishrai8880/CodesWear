import Product from "@/models/Product"
import connectToDB from "@/middleware/mongoose"

const handler =  async (req , res)=>{

    if(req.method == 'DELETE'){
        await Product.findByIdAndDelete(req.body._id) ;
        res.status(200).json({success : 'Successfully deleted'})
    }
    else{
        res.status(200).json({error : 'Method is not allowed'});
    }
    
    
}

export default connectToDB(handler);

  