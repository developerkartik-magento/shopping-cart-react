import './App.css'
import ChooseUs from './home/ChooseUs'
import FeaturedProduct from './home/FeaturedProduct'
import Footer from './home/Footer'
import Header from './home/Header'
import Hero from './home/Hero'
import ShopByCategory from './home/shopByCategory'
import Testimonial from './home/Testimonial'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopByCategory />
      <FeaturedProduct />
      <ChooseUs />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
