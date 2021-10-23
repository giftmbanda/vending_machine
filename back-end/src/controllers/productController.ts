import { Request, Response } from 'express';
import Coin from '../models/coinModel'; // Coin model
import Product from '../models/productModel'; // Product model
import JSONResponse from '../utils/JSONResponse';


const purchaseProduct = async (req: Request, res: Response) => {

    const productId: number = Number(req.body.productId);
    const insertedCoin: number = new Coin(req.body).getTotalAmount();
    const product: IProduct | undefined = Product.find((element: IProduct) => element.id === productId); // get product by id
   
    if (!product) // check if product location exist
        return JSONResponse.success(req, res, `Sorry product location does not exist, enter correct product location`); 

    if (product.quantity < 1) // check if product has stock
        return JSONResponse.success(req, res, `Sorry we are out of stock, returning back R: ${insertedCoin}`); 

    const change: number = insertedCoin - product.price; // calculate change

    if (change < 0)
        return JSONResponse.success(req, res, `Sorry you have insufficient funds, returning back R: ${insertedCoin}`);
    product.quantity -= 1; // update product quantity
    return JSONResponse.success(req, res, `Dispensing ${product.name}, your change is R: ${change}`);
}

const getAllProducts = async (req: Request, res: Response) => {

    if (!Product) // check for products 
        return JSONResponse.success(req, res, `Products do not exist`); 
    return JSONResponse.success(req, res, `Showing all products`, Product);
};

interface IProduct { // product interface 
    id: number;
    name: string;
    quantity: number;
    type: string;
    price: number;
};

export = { purchaseProduct, getAllProducts };
