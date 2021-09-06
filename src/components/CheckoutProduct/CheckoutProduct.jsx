import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ product }) => {
  const [, dispatch] = useStateValue();

  const deleteFromBasket = () => {
    if (window.confirm('Are your sure to remove this item?')) {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        payload: product.id
      });
    }
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={product.image} alt="product" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{product.title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(product.rating)
              .fill()
              .map(() => (<p key={Math.random()}>⭐</p>))
          }
        </div>

        <button onClick={deleteFromBasket} className="checkoutProduct__button">Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
