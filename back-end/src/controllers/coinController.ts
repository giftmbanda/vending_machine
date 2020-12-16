import Coin from '../models/coinModel' // Coin class
import Product from '../products/products';
import JSONResponse from '../utils/JSONResponse';
import { Request, Response } from 'express';

const purchaseProduct = async (req: Request, res: Response) => {

    const productId: number = Number(req.body.productId);
    const product = Product.find((element: any) => element.id === productId); // get product to purchase
    const insertedCoin: number = new Coin(req.body).getTotalAmount();

    if (!product)
        return JSONResponse.success(req, res, 'Sorry product location does not exist, enter correct product location'); // check if product exist

    if (product.quantity < 1)
        return JSONResponse.success(req, res, `Sorry we are out of stock, returning back R: ${insertedCoin}`);// handle out of stock

    const productPrice: number = product.price;
    const change: number = insertedCoin - productPrice; // calculate change

    if (change < 0)
        return JSONResponse.success(req, res, `Sorry you have insufficient funds, returning back R: ${insertedCoin}`);
    product.quantity -= 1; // update product quantity
    return JSONResponse.success(req, res, `Dispensing ${product.name}, your change is R: ${change}`);
}

const getAllProducts = async (req: Request, res: Response) => {

    if (!Product)
        return JSONResponse.success(req, res, 'Products do not exist'); // check if products exist 
    return JSONResponse.success(req, res, 'Showing all products', Product);
};

export = { purchaseProduct, getAllProducts };
