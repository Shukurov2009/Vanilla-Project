import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Services } from "./components/Services"
import { Products } from './components/Products/index';
import { Oatmea } from "./components/Oatmea";

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
      </main>
    </>
  )
}

export default App
