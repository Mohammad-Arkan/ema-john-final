import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () =>{
const loadedProduct = await fetch('products.json');
const products = await loadedProduct.json();
console.log(products)

//if cart data is in database, you have to use async await
const storedCart = getShoppingCart()
const savedCart = []
console.log(storedCart);
for(const id in storedCart){
    const addedProduct =products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity =   quantity;
        savedCart.push(addedProduct);
    }
}
// if you needed to send two things
// return [savedCart, products]

return savedCart;

}
export default cartProductLoader;