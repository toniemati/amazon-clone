import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Checkout from './views/Checkout/Checkout';
import Login from './views/Login/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log('👦:', user);

  useEffect(() => {
    const unsubscribe = auth
      .onAuthStateChanged((auth) => {
        if (auth) {
          //* User is logged in
          dispatch({
            type: 'SET_USER',
            payload: auth
          });
        } else {
          //* User is logged out
          dispatch({
            type: 'SET_USER',
            payload: null
          });
        }
      });

    return () => {
      //* Any cleanup operation goes here...
      unsubscribe();
    }
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
