import type { MenuItem } from '../types'

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="flex justify-between w-full p-3 border-2 border-teal-400 rounded-lg hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price} €</p>
    </button>
  )
}
