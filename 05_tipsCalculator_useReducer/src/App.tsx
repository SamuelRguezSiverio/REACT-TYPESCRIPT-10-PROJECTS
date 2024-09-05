import { useReducer } from 'react'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { menuItems } from './data/db'
import { initialState, orderReducer } from './reducers/order-reducer'

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="grid py-20 mx-auto md:grid-cols-2 max-w-7xl">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="p-5 space-y-10 border border-dashed rounded-lg border-slate-300">
          {state.order.length ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />

              <TipPercentageForm dispatch={dispatch} tip={state.tip} />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
