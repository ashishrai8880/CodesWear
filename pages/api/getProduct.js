import Product from "@/models/Product"
import connectToDB from "@/middleware/mongoose"

const handler =  async (req , res)=>{

    let product = await Product.find();
    res.status(200).json(product);
}

export default connectToDB(handler);

  