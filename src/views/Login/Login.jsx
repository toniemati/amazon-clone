import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../../firebase';
import { useState } from 'react';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png" alt="amazon logo" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

          <h5>Password</h5>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

          <button className="login__signInButton" type="submit">Sign in</button>
        </form>

        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see your Privacy Notice, our Cookies Notice and our Interest-Based Adds Notice.</p>

        <button onClick={handleRegister} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
