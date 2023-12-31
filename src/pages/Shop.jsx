import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import productsList from '../components/products.jsx';

export default function Shop({ addToCart }){
    const navigate = useNavigate();

    return (
        <div className='w-4/5 m-auto'>
            <h1>Peruse our fine food selection:</h1>
            <div className='grid grid-cols-2'>
                {productsList.map(product => 
                    <div className='border-solid border-2' key={product.name}>
                        <button onClick={() => navigate(`${product.id}`)}>{product.name}</button>
                        <img src={product.image} onClick={() => navigate(`${product.id}`)}/>
                        <div>${product.price}</div>
                        <button onClick={() => addToCart(product.name, product.price, product.image)} className='bg-sky-300 h-7 w-full'>Add to Cart</button>
                    </div>
                )}
            </div>
        </div>
    )
}

Shop.propTypes = {
    addToCart: PropTypes.func,
}
