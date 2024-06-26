import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../Data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler( async(req, res) => {
    const products = await Product.find({});
    res.send( products );
    })
);

productRouter.get('/seed', expressAsyncHandler( async(req, res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    res.send( { products: createdProducts } );
    })
);

productRouter.get('/:id', expressAsyncHandler( async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send( product );
    } else {
        res.status(404).send({ message: 'product not found' })
    }
    })
);

export default productRouter;