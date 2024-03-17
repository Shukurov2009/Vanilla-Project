import { Apps } from "./components/Apps"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Product2 } from "./components/Product2"
import { Services } from "./components/Services"
import { Products } from './components/Products/index';
import { Input } from "./components/Input"

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Services/>
      <Products/>
      <Product2/>
      <Apps/>
      <Input/>
      </main>
    </>
  )
}

export default App
