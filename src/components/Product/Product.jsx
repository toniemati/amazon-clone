import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>

        <p className="product__price">
          <strong>{product.price}</strong>$
        </p>

        <div className="product__rating">
          {Array(product.rating)
              .fill()
              .map(() => (<p key={Math.random()}>⭐</p>))
          }
        </div>
      </div>

      <img className="product__image" src={product.image} alt="product" />

      <button className="product__button">Add to basket</button>
    </div>
  )
}

export default Product
