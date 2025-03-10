import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon } from "lucide-react"

export default function Statistics() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">Statistics</CardTitle>
          <p className="text-sm text-gray-500">Target you've set for each month</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="overview" className="w-auto">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-1 px-3 py-1 text-sm border rounded-md">
            <CalendarIcon className="w-4 h-4" />
            <span>Mar 2, 2025 - Mar 8, 2025</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          {/* Placeholder for statistics chart */}
          <div className="flex items-end h-full w-full">
            <div className="w-full h-[250px] bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Statistics Chart</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

