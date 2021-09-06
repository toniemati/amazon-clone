import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { useState } from 'react';
import { getBasketTotal } from '../../reducer'; 

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const [total] = useState(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <div>
        Subtotal ({basket.length} items): <strong>${total}</strong>
      </div>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
