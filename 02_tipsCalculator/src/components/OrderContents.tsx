import { OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="mt-5 space-y-3">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacía</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
