"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

export default function MonthlySales() {
  const [salesData] = useState([
    { month: "Jan", value: 30 },
    { month: "Feb", value: 70 },
    { month: "Mar", value: 40 },
    { month: "Apr", value: 50 },
    { month: "May", value: 35 },
    { month: "Jun", value: 35 },
    { month: "Jul", value: 55 },
    { month: "Aug", value: 15 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 70 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 20 },
  ])

  const maxValue = Math.max(...salesData.map((item) => item.value))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Monthly Sales</CardTitle>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <div className="flex items-end h-[200px] gap-2">
            {salesData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1 gap-1">
                <div
                  className="w-full bg-blue-500 rounded-sm"
                  style={{
                    height: `${(item.value / maxValue) * 100}%`,
                    maxWidth: "30px",
                    margin: "0 auto",
                  }}
                ></div>
                <span className="text-xs text-gray-500">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

