import PropTypes from 'prop-types';
import CartItem from "../components/CartItem";

export default function Cart({ cart, cartItem }){
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
            <button>Checkout</button>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.object,
    cartItem: PropTypes.number,
}