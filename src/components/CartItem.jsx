// import productsList from '../components/products.jsx';

export default function CartItem({ item, cart }){
    return(
        <div>
            <div>{item}</div>
            <div>{cart[item].numItems} @ {cart[item].price} = {cart[item].numItems * cart[item].price}</div>
            <img src={cart[item].image} />
        </div>
    )
}