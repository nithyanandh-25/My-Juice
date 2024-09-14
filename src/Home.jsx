import './App.css';
import Apple from './assets/Apple.jpg';
import Mango from './assets/Mango.jpg';
import Orange from './assets/Orange.jpg';
import Pineapple from './assets/Pineapple.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRupeeSign, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';


const products = [
  { id: 1, name: 'Apple Juice', qty: '300ml', price: '50',  imgSrc: Apple },
  { id: 2, name: 'Pineapple Juice', qty: '300ml', price: '50', imgSrc: Pineapple},
  { id: 3, name: 'Orange Juice', qty: '300ml', price: '60',  imgSrc: Orange },
  { id: 4, name: 'Mango Juice', qty: '300ml', price: '40',  imgSrc: Mango},
  // Add more products as needed
];

function App() {
  return (
    <>
      <div className="header">
        <h2 className="logo">Ayurv Liquids</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
        <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <div className='nav-bar'>
        <ul>
          <li>Home</li>
          <li><link  />Organic Juices</li>
          <li>Fruit Juices</li>
          <li>Mocktails</li>
          <li>Tea Coop</li>
        </ul>
      </div>
      <div className='background-img'>
        <img src="https://img.freepik.com/premium-photo/sweet-spring-summer-fresh-juice-fruit-background-ai-generated_686498-3924.jpg" alt="img" />
      </div>
      <div className='para'>
        <p>
          Apple juice is low in calories and helps in maintaining weight management. It hydrates and, being low in sodium, helps to release excess water retained in the body. It also prevents water retention and swelling, giving a feeling of fullness and helping to prevent overeating.
          Orange juice is a concentrated source of vitamin C, a water-soluble vitamin that doubles as a powerful antioxidant and plays a central role in immune function.
        </p>
      </div>
      <div className='product-list'>
        {products.map(product => (
          <div key={product.id} className='product'>
            <img src={product.imgSrc} alt={product.name} className='product-image' />
            <div className='product-info'>
              <h4>{product.name}-{product.qty}</h4>
              <h3>{product.price}<FontAwesomeIcon icon={faRupeeSign} /></h3>
              <div className='cart-fav'>
                <div className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className='heart-icon'><FontAwesomeIcon icon ={faHeart} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default App;