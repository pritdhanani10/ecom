/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {number} props.change
 * @param {React.ReactNode} props.icon
 */
export default function StatCard({ title, value, change, icon }) {
  const isPositive = change >= 0

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-gray-100 rounded-md">{icon}</div>
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-500">{title}</h3>
      <div className="flex items-baseline mt-1">
        <p className="text-2xl font-semibold">{value}</p>
        <span className={`ml-2 text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
        </span>
      </div>
    </div>
  )
}

