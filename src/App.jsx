import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
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
      </main>
    </>
  )
}

export default App
