import { useState } from 'react'
import Header from './components/Header'
import Tshirt from './components/Tshirt'
import { db } from './data/db'

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const itemExist = cart.findIndex((tshirt) => tshirt.id === item.id)

    if (itemExist >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExist].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  

  return (
    <>
      <Header cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((tshirt) => (
            <Tshirt
              key={tshirt.id}
              tshirt={tshirt}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            <a href="https://github.com/SamuelRguezSiverio" target="_blank">
              SamuelRguezSiverio - Todos los derechos Reservados
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
