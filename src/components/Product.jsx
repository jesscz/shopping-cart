import { useParams } from 'react-router-dom';
import productsList from '../components/products.jsx';

export default function Product({ addToCart }){
  const { id } = useParams();
  const product = productsList.find((prod) => prod.id === id)

  return (
    <div>
      <h1>{product.name}</h1>
      <div>${product.price}</div>
      <img src={product.image} />
      <div>About this product: {product.description}</div>
      <button onClick={() => addToCart(product.name, product.price, product.image)} className='bg-sky-300'>Add to Cart</button>
    </div>
  )
}