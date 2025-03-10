import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

export default function MonthlyTarget() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Monthly Target</CardTitle>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">Target you've set for each month</p>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-blue-500"
                strokeWidth="10"
                strokeDasharray={75.55 * 2.51}
                strokeDashoffset={0}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">75.55%</span>
              <span className="text-sm font-medium text-green-500">+10%</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">You earn $3287 today. It's higher than last month.</p>
          <p className="text-sm text-gray-700">Keep up your good work!</p>
        </div>
      </CardContent>
    </Card>
  )
}

