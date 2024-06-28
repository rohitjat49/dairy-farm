import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import OurFarm from './OurFarm'
import SliderComponent from './SliderComponent'
import Products from './Products'
import FarmStory from './farmStory'
import Teamcomponent from './Teamcomponent'
import ProductInfo from './ProductInfo'
import AllProductImg from './AllProductImg'
import OurShop from './OurShop'
import FreshMilkComponent from './FreshMilkComponent'
import Dashboard from './Dashboard'

const HomeComponent = () => {
  return (
    <>
    
   
    <SliderComponent/>
    <OurFarm/>
   <Products/>
   <AllProductImg/>
   <FarmStory/>
   <ProductInfo/>
   <FreshMilkComponent/>

   <Teamcomponent/>
   <OurShop/>
    
   

    
   
    {/* </div> */}
    </>
  )
}

export default HomeComponent