import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './Header.css';

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="https://www.biuroprasoweamazon.pl/dam/jcr:28f26bd8-cf94-4558-b4ae-42e80817b243/amazon_logo_RGB_WHITE.png" alt="amazon" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello toni</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Header
