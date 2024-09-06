import { formatCurrency } from '../helpers'

type AmountDisplayProps = {
  label: string
  amount: number
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl font-bold text-teal-600">
      {label} : {''}
      <span className="font-black">{formatCurrency(amount)}</span>
    </p>
  )
}
