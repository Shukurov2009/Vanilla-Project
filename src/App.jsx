import { Apps } from "./components/Apps"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Services } from "./components/Services"
import { Products } from './components/Products/index';
import { Oatmea } from "./components/Oatmea";
import { Input } from "./components/Input"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Services/>
      <Oatmea/>
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
