import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, 
  faUser, 
  faShoppingCart, 
  faHeart, 
  faRupeeSign,
  faCopyright 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import Apple from './assets/Apple.jpg';
import Orange from './assets/Orange.jpg';
import Pineapple from './assets/Pineapple.jpg';
import Mango from './assets/Mango.jpg';
import SearchBar from './components/header/SearchBar';
import './Home.css';

// Product data
const products = [
  { id: 1, name: 'Apple Juice', qty: '300ml', price: '50', imgSrc: Apple },
  { id: 2, name: 'Pineapple Juice', qty: '300ml', price: '50', imgSrc: Pineapple },
  { id: 3, name: 'Orange Juice', qty: '300ml', price: '60', imgSrc: Orange },
  { id: 4, name: 'Mango Juice', qty: '300ml', price: '40', imgSrc: Mango },
];

function Home() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleChange = (e) => setQuery(e.target.value);
  const handleClear = () => setQuery('');

  return (
    <>
      <div className="header">
        <h2 className="logo">Ayurv Liquids</h2>
        <SearchBar query={query} handleChange={handleChange} handleClear={handleClear} />
        <div className='hsf'>
        <Link to ='/home'>
          <button aria-label='home'>
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
        <button>
          <FontAwesomeIcon icon={faHeart}/>
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <Link to='/login'>
          <button aria-label="User Login">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>
        </div>
      </div>

      <div className='nav-bar'>
        <ul>
          <li><Link to="/Healthy">Healthy Juices</Link></li>
          <li><Link to="/fruit">Fruit Juices</Link></li>
          <li><Link to="/mocktails">Mocktails</Link></li>
          <li><Link to="/teacoop">Tea Coop</Link></li>
        </ul>
      </div>

      {/* <div className='background-img'>
        <img src="https://cdn.pixabay.com/photo/2017/02/02/18/04/pattern-2033412_1280.jpg" alt="background" />
      </div> */}

      <div className='para'>
        <p className='web-para'>
          Discover the refreshing world of healthy juices, packed with nutrients to invigorate your body and boost your well-being!...
        </p>
      </div>

      <div className='product-list'>
        {filteredProducts.map(product => (
          <div key={product.id} className='product'>
            <img src={product.imgSrc} alt={product.name} className='product-image' />
            <div className='product-info'>
              <h4>{product.name} - {product.qty}</h4>
              <h3>{product.price}<FontAwesomeIcon icon={faRupeeSign} /></h3>
              <div className='cart-fav'>
                <div className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className='heart-icon'><FontAwesomeIcon icon={faHeart} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <h3>Follow Us:</h3>
        <ul>
          <li><Link to="https://www.facebook.com/" aria-label="Follow us on Facebook"><FontAwesomeIcon icon={faFacebook} size='2x' /></Link></li>
          <li><Link to='https://www.instagram.com/' aria-label="Follow us on Instagram"><FontAwesomeIcon icon={faInstagram} size='2x' /></Link></li>
          <li><Link to='https://www.linkedin.com/feed/' aria-label="Follow us on LinkedIn"><FontAwesomeIcon icon={faLinkedin} size='2x' /></Link></li>
          <li><Link to='https://www.youtube.com/' aria-label="Follow us on YouTube"><FontAwesomeIcon icon={faYoutube} size='2x' /></Link></li>
        </ul>
        <div className='footerMenu'>
          <p className='footer'>Shop by Keyword:</p>
            <ul>
              <li><Link to='/sandwich'>Sandwich</Link></li>
              <li><Link to='/coldpress'>Cold Press Juices</Link></li>
              <li><Link to="/teacoop">Green Tea</Link></li>
              <li><Link to='/herbs'>Herbs & Spices</Link></li>
              <li><Link to="/Healthy">Aloe Vera Juice</Link></li>
              <li><Link to="/Healthy">Healthy Juices</Link></li>
              <li><Link to='/mocktails'>Mocktails</Link></li>
          </ul>
        </div>

        <p>Copyright 2024 <FontAwesomeIcon icon={faCopyright} /> Ayurv Liquids</p>
      </footer>
    </>
  );
}

export default Home;
