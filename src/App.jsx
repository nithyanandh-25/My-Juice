import './App.css'
import Img1 from './assets/apple_j_img.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

function App() {
  return (
    <>
    <div className="header">
      <h2 className="logo">Ayurv Liquids</h2>
      <input 
      type="text"
      className="search-bar"
      placeholder="Search..." />
      <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
    <div className='nav-bar'>
      <ul>
        <li>Home</li>
        <li>Organic Juices</li>
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
        Apple juice is in low in calories and hence it helps in maintaining weight management. It not only hydrates but as it is low in sodium it helps to release excess water retained in the body. It also prevents water retention and swelling. it gives a feeling of fullness in stomach and hence prevents one from overeating.
        Orange juice is a concentrated source of vitamin C, a water-soluble vitamin that doubles as a powerful antioxidant and plays a central role in immune function.
      </p>
    </div>
    <div className='product-list'>
      <div className='product'>
        <img src={Img1} alt="apple" className='product-image'/>
        <div className='product-info'>
          <h3>apple</h3>
          <p>Description of apple</p>
        </div>
      </div>
      <div className='product'>
         <img src={Img1} alt="apple" className='product-image'/>
        <div className='product-info'>
          <h3>apple</h3>
          <p>Description of apple</p>
        </div>
      </div>
      <div className='product'>
        <img src={Img1} alt="apple" className='product-image'/>
        <div className='product-info'>
          <h3>apple</h3>
          <p>Description of apple</p>
        </div>
      </div>
      <div className='product'>
        <img src={Img1} alt="apple" className='product-image'/>
        <div className='product-info'>
          <h3>apple</h3>
          <p>Description of apple</p>
        </div>
      </div>
    </div> 
    </>
  );
}

export default App;
