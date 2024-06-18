import './App.css';
import About from './component/About';
import AllProductImg from './component/AllProductImg';
import BlogComponent from './component/BlogComponent';
import ContactPage from './component/ContactPage';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Ghee from './component/Ghee';
import MilkProduct from './component/MilkProduct';
import Navbar from './component/Navbar';
import OrderNowComponent from './component/OrderNowcomponent';
 import OurFarm from './component/OurFarm';
import Panner from './component/Panner';
import Products from './component/Products';
import Services from './component/Services';
import SliderComponent from './component/SliderComponent';

function App() {
  return (
   <>
   <Navbar/>
  <SliderComponent/>
   <OurFarm/>
   <Products/>
   <About/>
   <Footer/>
   <Services/>
   <BlogComponent/>
   <Gallery/>
   <OrderNowComponent/>
   
   {/* <Products/>
   <About/>
   <Services/>
   <Footer/>
   <Gallery/>
   <AllProductImg/>
   <MilkProduct/>
   <Ghee/>
   <Panner/> */}
   {/* <ContactPage/> */}
  
   
   </>
  );
}

export default App;
