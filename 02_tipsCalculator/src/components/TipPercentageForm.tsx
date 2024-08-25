import { Dispatch, SetStateAction } from 'react'

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
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
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
