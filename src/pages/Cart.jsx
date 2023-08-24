import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart({ cart, cartItem }){
    const navigate = useNavigate();
    let display = [];
    for (const item in cart){
        display.push(<CartItem 
            item={item}
            cart={cart}
        />)
    }
    if (display.length === 0){
        display.push(<button onClick={() => navigate("/shop")} className="mr-auto ml-auto text-xl">
        There's nothing in your cart. Add something to your Cart here!
    </button>)
    }
    return (
        <div>
            <div>Your Cart</div>
            <div>{display}</div>
            <button className='' >Checkout</button>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.object,
    cartItem: PropTypes.number,
}