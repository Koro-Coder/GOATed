import './App.css';
import Announcement from './components/Announcement';
import Navbar from './components/navbar.jsx'
import NewsLetter from './components/news-letter';
import ProductCardList from './components/product-card-list';
import Slider from './components/slider';


function App() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <ProductCardList/>
        <NewsLetter/>
    </div>
  );
}

export default App;
