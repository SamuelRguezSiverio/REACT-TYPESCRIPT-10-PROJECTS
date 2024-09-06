import { PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="p-2 text-sm font-bold text-center text-white bg-red-600">
      {children}
    </p>
  )
}
