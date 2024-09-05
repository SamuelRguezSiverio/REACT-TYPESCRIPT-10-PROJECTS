export type Tshirt = {
    id: number
    name: string
    image: string
    description: string
    price: number
  }

  export type CartItem = Tshirt & {
    quantity: number
  }
