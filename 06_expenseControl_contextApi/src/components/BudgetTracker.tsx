import AmountDisplay from './AmountDisplay'

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfica de gastos" />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <button
          type="button"
          className="w-full p-2 font-bold text-white uppercase bg-pink-600 rounded-lg"
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={300} />
        <AmountDisplay label="Disponible" amount={200} />
        <AmountDisplay label="Gastado" amount={100} />
      </div>
    </div>
  )
}
