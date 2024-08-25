import { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalsProps = {
  order: OrderItem[]
}

export default function OrderTotals({ order }: OrderTotalsProps) {
  const subTotalAmmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subTotalAmmount)}</span>
        </p>

        <p>
          Propina: {''}
          <span className="font-bold">0€</span>
        </p>

        <p>
          Total a pagar: {''}
          <span className="font-bold">0€</span>
        </p>
      </div>

      <button></button>
    </>
  )
}
