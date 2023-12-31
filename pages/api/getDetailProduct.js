import Product from "@/models/Product"
import connectToDB from "@/middleware/mongoose"

const handler =  async (req , res)=>{
    console.log(' req : ',req.query);
    if(req.method == 'GET'){

        let product = await Product.findById(req.query._id)
        res.status(200).json({product});
    }else{
        res.status(400).json({error : 'Method not allowed'})
    }
}

export default connectToDB(handler);

  