import { useMemo, Dispatch } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducer'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subTotalAmmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const tipAmount = useMemo(() => subTotalAmmount * tip, [subTotalAmmount, tip])

  const totalAmount = useMemo(
    () => subTotalAmmount + tipAmount,
    [subTotalAmmount, tipAmount]
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
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: 'place-order' })}
      >
        Guardar Orden
      </button>
    </>
  )
}
