import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Register() {
    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div className='main-container'>
            <h1 className="logo-in">Ayurv Liquids</h1>
            <h2 className='login'>Register</h2>
                <form onSubmit={handleSubmit} className='registration'>
                <input 
                    type="text"
                    className='input-regi'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type="tel"
                    className='input-regi'
                    placeholder='Mobile Number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    className='input-regi'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='submit'>Submit</button>
            </form>
            <div className='new-regi'>
                <ul>
                    <li><Link to='/login'>login..</Link></li>
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

export default Register;