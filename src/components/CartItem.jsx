import PropTypes from 'prop-types';

export default function CartItem({ item, cart }){
    return(
        <div>
            <div>{item}</div>
            <div>{cart[item].numItems} @ {cart[item].price} = {cart[item].numItems * cart[item].price}</div>
            <img src={cart[item].image} />
        </div>
    )
}

CartItem.propTypes = {
    cart: PropTypes.object,
    item: PropTypes.object,
}