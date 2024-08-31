import { useReducer, useEffect, useMemo } from 'react'
import Form from './components/Form'
import { activityReducer, initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'
import CalorieTracker from './components/CalorieTracker'

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () =>
    useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="py-3 bg-teal-600">
        <div className="flex justify-between max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-center text-white uppercase">
            Contador de Calorías
          </h1>
          <button
            className="p-2 text-sm font-bold text-white uppercase bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="px-5 py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="py-10 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>

      <section className="max-w-4xl p-10 mx-auto">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  )
}

export default App
