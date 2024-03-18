import { Apps } from "./components/Apps"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Services } from "./components/Services"
import { Products } from './components/FirstProduct/index';
import { Oatmea } from "./components/Oatmea";
import { Input } from "./components/Input"
import { Footer } from "./components/Footer"
import { SecondProducts } from "./components/SecondProduct"

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Services/>
      <Oatmea/>
      <SecondProducts/>
      <Products/>
      <Product2/>
      <Apps/>
      <Input/>
      </main>
      <Footer/>
    </>
  )
}

export default App
