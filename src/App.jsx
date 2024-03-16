import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Product } from "./components/Products"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Services/>
      <Product/>
      <Product2/>
      </main>
    </>
  )
}

export default App
