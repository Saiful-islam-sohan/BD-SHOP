import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import Trusted from "../components/Trusted"
import FeaturesProduct from "./FeaturesProduct"


const Home = () => {


  let data={
    name:'SOHAN SHOP'

  }
  
  return (
    <div className="mt-1">
        <HeroSection data={data} />
        <FeaturesProduct/>
        <Services/>
        <Trusted/>
    </div>
  )
}

export default Home
