import { CartActions } from '../reducers/cart-reducer'
import type { Tshirt } from '../types/'
import { Dispatch } from 'react'

type TshirtProps = {
  tshirt: Tshirt
  dispatch: Dispatch<CartActions>
}

export default function Tshirt({ tshirt, dispatch }: TshirtProps) {
  const { name, image, description, price } = tshirt

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen camiseta"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">{price} €</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() =>
            dispatch({ type: 'add-to-cart', payload: { item: tshirt } })
          }
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}
