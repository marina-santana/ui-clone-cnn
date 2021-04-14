import './App.css';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import News from './components/News/News';
import NewsLetter from './components/NewsLetter/NewsLetter';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <SearchBar/>
      <Carousel/>
      <News/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
