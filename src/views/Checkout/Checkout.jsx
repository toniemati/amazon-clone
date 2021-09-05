import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import './Checkout.css';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://m.media-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688.jpg" alt="ad" />

        {!basket?.length ? (
          <div>
            <h2 className="checkout__text">Your Amazon Cart is empty</h2>
            <p>
              You have no items in your basket.
              To add one or more items, 
              click "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__text">Your shopping basket</h2>

            {/* list out all fo the checkout products */}
            {basket.map((product) => (
              <CheckoutProduct key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
