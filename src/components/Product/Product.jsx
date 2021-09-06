import './Product.css';
import { useStateValue } from '../../StateProvider';

const Product = ({ product }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    //* Add item to basket...
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: product
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>

        <div className="product__rating">
          {Array(product.rating)
              .fill()
              .map(() => (<p key={Math.random()}>⭐</p>))
          }
        </div>
      </div>

      <img className="product__image" src={product.image} alt="product" />

      <button onClick={addToBasket} className="product__button">Add to basket</button>
    </div>
  )
}

export default Product
