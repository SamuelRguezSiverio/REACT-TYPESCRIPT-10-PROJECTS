import MenuItem from './components/MenuItem'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'

function App() {

  const {addItem} = useOrder()
  
  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas
        </h1>
      </header>

      <main className="grid py-20 mx-auto md:grid-cols-2 max-w-7xl">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-4xl font-black">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
