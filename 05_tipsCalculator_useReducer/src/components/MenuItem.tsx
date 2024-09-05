import { Dispatch } from 'react'
import { formatCurrency } from '../helpers'
import type { MenuItem } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
  item: MenuItem
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="flex justify-between w-full p-3 border-2 border-teal-400 rounded-lg hover:bg-teal-200"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
