import './App.css';
import Announcement from './components/Announcement';
import Navbar from './components/navbar.jsx'
import ProductCardList from './components/product-card-list';
import Slider from './components/slider';


function App() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <ProductCardList/>
    </div>
  );
}

export default App;
