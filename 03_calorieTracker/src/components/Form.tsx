import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { categories } from '../data/categories'
import { Activity } from '../types'
import { ActivityActions, ActivityState } from '../reducers/activity-reducer'

type FormProps = {
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0,
}

export default function Form({ dispatch, state }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState)

  useEffect(() => {
    if (state.activeId) {
      const selectedActiveId = state.activities.filter(
        (stateActivity) => stateActivity.id === state.activeId
      )[0]
      setActivity(selectedActiveId)
    }
  }, [state.activeId, state.activities])

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    })
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'save-activity', payload: { newActivity: activity } })
    setActivity({ ...initialState, id: uuidv4() })
  }
  return (
    <form
      className="p-10 space-y-5 bg-white rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:
        </label>
        <select
          className="w-full p-2 bg-white border rounded-lg border-slate-300"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          className="p-2 border rounded-lg border-slate-300"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta..."
          value={activity.name}
          onChange={handleChange}
        ></input>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          id="calories"
          type="text"
          className="p-2 border rounded-lg border-slate-300"
          placeholder="Calorías ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        ></input>
      </div>

      <input
        type="submit"
        className="w-full p-2 font-bold text-white uppercase bg-gray-800 cursor-pointer hover:bg-gray-900 disabled:opacity-10"
        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        disabled={!isValidActivity()}
      />
    </form>
  )
}
