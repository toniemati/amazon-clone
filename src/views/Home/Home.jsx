import { useState } from 'react';
import Product from '../../components/Product/Product';
import './Home.css';
import productsList from '../../products';

const Home = () => {
  const [products] = useState(productsList);

  return (
    <div className="home">
      <img className="home__image" src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/BRND_MAY19_00000_MLP_1440x675_Final_en_CA_PVD2410_MLPUpdates.jpg" alt="home" />
      
      {/* Product */}
      <div className="home__row">
        <Product product={products[0]} />
        <Product product={products[1]} />
      </div>

      <div className="home__row">
        <Product product={products[2]} />
        <Product product={products[3]} />
        <Product product={products[4]} />
      </div>

      <div className="home__row">
        <Product product={products[5]} />
      </div>
    </div>
  )
}

export default Home
