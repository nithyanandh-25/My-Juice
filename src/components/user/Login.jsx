import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Login() {
    const [ number, setNumber ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='main-container'>
          <h1 className="logo">Ayurv Liquids</h1>
          <h2 className='login'>Log in</h2>
          
            <form onSubmit={handleSubmit} className='login'>
              <input 
                  type="tel"
                  className='input-login'
                  placeholder='Mobile Number'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
              />
              <input 
                  type="password"
                  className='input-login'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <button type='submit' className='submit' >Login</button>
            </form>
            <div className='new-regi'>
              <ul>
                <li><Link to='/Register'>New Register..</Link></li>
              </ul>
            </div>
            <div className='home-btn'>
          <Link to ='/home'>
          <button aria-label='home'>
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
          </div>
        </div>
    )
}

export default Login;