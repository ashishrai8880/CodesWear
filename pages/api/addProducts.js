import Product from "@/models/Product"
import connectToDB from "@/middleware/mongoose"

const handler =  async (req , res)=>{

    if(req.method == 'POST'){

        for(let i =0 ; i<req.body.length ; i++){

            let product = new Product({
                title : req.body[i].title ,
                slug : req.body[i].slug ,
                desc : req.body[i].desc ,
                img  : req.body[i].img ,
                category : req.body[i].category ,
                size : req.body[i].size ,
                color : req.body[i].color ,
                price : req.body[i].price ,
                availableQty : req.body[i].availableQty ,
            })

            await product.save();
        }

        res.status(200).json({success : 'Saved successfully'})
    }
    else{
        res.status(400).json({error : 'Method is not allowed'});
    }
    
}

export default connectToDB(handler);

  