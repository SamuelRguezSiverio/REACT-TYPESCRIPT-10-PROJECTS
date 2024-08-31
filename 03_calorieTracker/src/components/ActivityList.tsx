import { Activity } from '../types'
import { categories } from '../data/categories'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from '../reducers/activity-reducer'
import { Dispatch, useMemo } from 'react'

type ActivityListProps = {
  activities: Activity[]
  dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({
  activities,
  dispatch,
}: ActivityListProps) {
  const getCategoryName = (category: Activity['category']) => {
    const categoryFound = categories.find((cat) => cat.id === category)
    return categoryFound ? categoryFound.name : ''
  }

  const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-slate-600">
        Comida y Actividades
      </h2>

      {isEmptyActivities ? (
        <p className="my-5 text-center">No hay Actividades aún...</p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="flex justify-between px-5 py-10 mt-5 bg-white shadow"
          >
            <div className="relative space-y-2">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 uppercase font-bold 
                ${activity.category === 1 ? 'bg-teal-500 ' : 'bg-orange-500'}`}
              >
                {getCategoryName(activity.category)}
              </p>
              <p className="pt-5 text-2xl font-bold">{activity.name}</p>
              <p className="text-4xl font-black text-teal-500">
                {activity.calories} {''}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={() =>
                  dispatch({
                    type: 'set-activeId',
                    payload: { id: activity.id },
                  })
                }
              >
                <PencilSquareIcon className="w-8 h-8 text-gray-800" />
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: 'delete-activity',
                    payload: { id: activity.id },
                  })
                }
              >
                <XCircleIcon className="w-8 h-8 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  )
}
