import BudgetForm from './components/BudgetForm'
import { useBudget } from './hooks/useBudget'

export default function App() {
  const { state, dispatch } = useBudget()
  console.log(state)
  return (
    <>
      <header className="py-8 bg-teal-600 max-h72">
        <h1 className="text-4xl font-black text-center text-white uppercase">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl p-10 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <BudgetForm />
      </div>
    </>
  )
}
