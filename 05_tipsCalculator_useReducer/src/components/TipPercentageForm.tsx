import { Dispatch } from 'react'
import { OrderActions } from '../reducers/order-reducer'

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number
}

export default function TipPercentageForm({
  dispatch,
  tip,
}: TipPercentageFormProps) {
  const tipOptions = [
    {
      id: 'tip-10',
      value: 0.1,
      label: '10%',
    },
    {
      id: 'tip-20',
      value: 0.2,
      label: '20%',
    },
    {
      id: 'tip-50',
      value: 0.5,
      label: '50%',
    },
  ]

  return (
    <div>
      <h3 className="text-2xl font-black">Propina</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: 'add-tip',
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
