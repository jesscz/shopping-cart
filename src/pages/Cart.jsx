import CartItem from "../components/CartItem";

function Cart({ cart, cartItem }){
    let display = [];
    for (const item in cart){
        display.push(<CartItem 
            item={item}
            cart={cart}
        />)
    }
    return (
        <div>
            <div>Your Cart</div>
            <div>{display}</div>
        </div>
    )
}

export default Cart;