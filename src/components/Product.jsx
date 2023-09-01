import React from 'react';
import { useParams } from 'react-router-dom';
import productsList from '../components/products.jsx';

export default function Product(){
  const { name } = useParams();
  const productItem = productsList.find((prod) => prod.name === name)

  return (
    <div>
      <h2>adsf{productItem.name}</h2>
      <button className='bg-sky-300'>Add to Cart</button>
    </div>
  )
}