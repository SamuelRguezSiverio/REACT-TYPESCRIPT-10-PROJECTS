type CalorieDisplayProps = {
  calories: number
  text: string
}
export default function CalorieDisplay({
  calories,
  text,
}: CalorieDisplayProps) {
  return (
    <p className="grid grid-cols-1 gap-3 font-bold text-center text-white rounded-full">
      <span className="text-6xl font-black text-orange">{calories}</span>
      {text}
    </p>
  )
}
