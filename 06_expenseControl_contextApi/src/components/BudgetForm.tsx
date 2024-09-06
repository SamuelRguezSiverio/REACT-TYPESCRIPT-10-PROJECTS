import { useState, useMemo } from 'react'
import { useBudget } from '../hooks/useBudget'

export default function BudgetForm() {
  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'add-budget', payload: { budget } })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl font-bold text-center text-teal-600"
        >
          Definir Presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full p-2 bg-white border border-gray-200"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definir Presupuesto"
        className="w-full p-2 font-black text-white bg-teal-600 cursor-pointer hover:bg-teal-700 disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  )
}
