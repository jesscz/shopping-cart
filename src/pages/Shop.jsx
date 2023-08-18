import React from 'react';
import '../css/App.css'
import productsList from '../components/products.jsx';
import photo1 from '../assets/fruits/photo1.avif';


function Shop(){
    productsList.map(i => {console.log(i.image)})

    return (
        <div>
            <h1>Peruse our fine food selection:</h1>
            <div>
                {productsList.map(product => 
                    <div className='border-solid border-2' key={product.name}>
                        <span>{product.name}</span>
                        <img src={product.image} />
                        <span>{product.price}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Shop;