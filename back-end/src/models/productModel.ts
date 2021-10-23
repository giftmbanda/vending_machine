interface IProduct { // product interface 
    id: number;
    name: string;
    quantity: number;
    type: string;
    price: number;
}

const products: IProduct[] = [
    { id: 1, name: "Niknaks Spicy Beef 135g", quantity: 6, type: "Snack", price: 11.50 },
    { id: 2, name: "Lunchbar Chocolate 62g", quantity: 4, type: "Chocolate", price: 2.50 },
    { id: 3, name: "Grape Juice 300ml", quantity: 2, type: "Juice", price: 16.00 },
    { id: 4, name: "Coca-Cola Original 300ml", quantity: 5, type: "Soft Drink", price: 15.50 },
    { id: 5, name: "Tiffany Chocolate 90g", quantity: 3, type: "Biscuits", price: 5.00 },
    { id: 6, name: "Powerade Zero 500ml", quantity: 1, type: "Energy Drink", price: 15.50 },
    { id: 7, name: "Bakers Topper 125g", quantity: 7, type: "Biscuit", price: 8.50 },
    { id: 8, name: "Maynards Wine Gums 39g", quantity: 3, type: "Chewing Gum", price: 9.00 },
    { id: 9, name: "Stimorol Spearmint Gum x 8", quantity: 0, type: "Chewing Gum", price: 8.50 },
]

export default products;
