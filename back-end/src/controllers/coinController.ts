import Coin from '../models/coinModel' // Coin class
import Product from '../products/products';
import JSONResponse from '../utils/JSONResponse';
import { Request, Response } from 'express';

const purchaseProduct = async (req: Request, res: Response) => {

    const productId: number = Number(req.body.productId);
    const product = Product.find((element: any) => element.id === productId); // get product to purchase

    if (!product)
        return JSONResponse.success(req, res, 'Sorry product does not exist, returning coins'); // check if product exist

    if (product.quantity < 1)
        return JSONResponse.success(req, res, 'Sorry we are out of stock, returning coins');// handle out of stock

    const change: number = new Coin(req.body).getTotalAmount() - product.price; // calculate change
    if (change < 0)
        return JSONResponse.success(req, res, 'Sorry you have insufficient funds, returning coins');
    product.quantity -= 1; // update product quantity
    return JSONResponse.success(req, res, 'dispensing product', { product, change });
}

const getAllProducts = async (req: Request, res: Response) => {

    if (!Product)
        return JSONResponse.success(req, res, 'products do not exist'); // check if products exist 

    setTimeout(() => {
        return JSONResponse.success(req, res, 'showing all products', Product);
    }, 3000);


};

export = { purchaseProduct, getAllProducts };
