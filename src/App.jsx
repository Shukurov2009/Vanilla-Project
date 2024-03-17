import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Services } from "./components/Services"
import { Products } from './components/Products/index';

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Services/>
      <Products/>
      <Product2/>
      </main>
    </>
  )
}

export default App
