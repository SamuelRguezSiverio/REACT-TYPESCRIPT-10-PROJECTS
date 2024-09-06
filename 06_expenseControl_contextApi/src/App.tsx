import { useMemo } from 'react'
import BudgetForm from './components/BudgetForm'
import { useBudget } from './hooks/useBudget'
import BudgetTracker from './components/BudgetTracker'
import ExpenseModal from './components/ExpenseModal'

export default function App() {
  const { state } = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
      <header className="py-8 bg-teal-600 max-h72">
        <h1 className="text-4xl font-black text-center text-white uppercase">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl p-10 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        
      // <main className='max-w-3xl py-10 mx-auto'>
        
      // </main>
      
      <ExpenseModal />
      )}
    </>
  )
}
