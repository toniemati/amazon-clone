import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import { useEffect, useState } from 'react';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = basket.reduce((acc, { price }) => acc + price, 0);
    setTotal(sum);
  }, [basket]);

  return (
    <div className="subtotal">
      <p>
        <small>$</small>
        <strong>{total}</strong>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
