import { Dispatch } from 'react'
import { formatCurrency } from '../helpers'
import { OrderItem } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type OrderContentsProps = {
  order: OrderItem[]
  dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="mt-10 space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-5 border-t border-gray-200 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="w-8 h-8 font-black text-white bg-red-600 rounded-full"
              onClick={() =>
                dispatch({ type: 'remove-item', payload: { id: item.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
