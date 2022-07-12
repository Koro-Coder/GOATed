import './App.css';
import Announcement from './components/Announcement';
import Category from './components/Categories';
import Footer from './components/footer';
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
        <Category/>
        <ProductCardList/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;
