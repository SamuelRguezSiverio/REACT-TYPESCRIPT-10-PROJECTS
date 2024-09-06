import { useState, ChangeEvent } from 'react'
import { categories } from '../data/categories'
import DatePicker from 'react-date-picker'
import { DraftExpense, Value } from '../types'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date(),
  })

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    })
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const isAmountField = ['amount'].includes(name)
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    })
  }

  return (
    <form className="space-y-5">
      <legend className="py-2 text-2xl font-black text-center uppercase border-b-4 border-teal-500">
        Nuevo Gasto
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nuevo Gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el Nombre del gasto"
          className="p-2 bg-slate-100"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade la Cantidad del gasto: ej. 300"
          className="p-2 bg-slate-100"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoría:
        </label>
        <select
          id="category"
          className="p-2 bg-slate-100"
          value={expense.category}
          name="category"
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha Gasto:
        </label>
        <DatePicker
          className="bg-slate-100"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="w-full p-2 font-bold text-white uppercase bg-teal-600 rounded-lg cursor-pointer"
        value={'Registrar Gasto'}
      />
    </form>
  )
}
