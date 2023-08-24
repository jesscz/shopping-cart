import PropTypes from 'prop-types';
import productsList from '../components/products.jsx';

export default function Shop({ addToCart }){

    return (
        <div className='w-4/5 m-auto'>
            <h1>Peruse our fine food selection:</h1>
            <div className='grid grid-cols-2'>
                {productsList.map(product => 
                    <div className='border-solid border-2' key={product.name}>
                        <div>{product.name}</div>
                        <img src={product.image} />
                        <div>{product.price}</div>
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
