import './App.css';
import 'swiper/swiper.min.css'
import Action from './components/Action/Action';
import Discover from './components/Discover/Discover';
import Footer from './components/Footer/Footer';
import ListProduct from './components/ListProduct/ListProduct';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Slider autoPlay timeOut={5000}/>
      <ListProduct />
      <MoreInfo />
      <Discover />
      <Action />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
