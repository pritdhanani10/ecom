import { useState } from "react"
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 w-screen">
      {/* Mobile sidebar backdrop */}
      

      {/* Sidebar */}
      

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <div className="flex items-center">
            
            <div className="relative ml-4 lg:ml-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 lg:w-72"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative rounded-full p-1 hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
           
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="mb-6 flex flex-col justify-between lg:flex-row lg:items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="mt-4 flex items-center space-x-3 lg:mt-0">
              <div className="relative">
                <select className="appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
              <button className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
                </div>
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>12.5%</span>
                </div>
                <span className="ml-2 text-gray-500">from last month</span>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Orders</p>
                  <p className="text-2xl font-bold text-gray-900">356</p>
                </div>
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <ShoppingCart className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>8.2%</span>
                </div>
                <span className="ml-2 text-gray-500">from last month</span>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Customers</p>
                  <p className="text-2xl font-bold text-gray-900">2,453</p>
                </div>
                <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>4.6%</span>
                </div>
                <span className="ml-2 text-gray-500">from last month</span>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">3.2%</p>
                </div>
                <div className="rounded-full bg-yellow-100 p-2 text-yellow-600">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>0.5%</span>
                </div>
                <span className="ml-2 text-gray-500">from last month</span>
              </div>
            </div>
          </div>

          {/* Recent orders */}
          <div className="mb-6 rounded-lg border bg-white shadow-sm">
            <div className="border-b px-4 py-4 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {[1, 2, 3, 4, 5].map((order) => (
                    <tr key={order} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        #ORD-{Math.floor(Math.random() * 10000)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">Customer {order}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            order % 3 === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : order % 2 === 0
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order % 3 === 0 ? "Pending" : order % 2 === 0 ? "Completed" : "Processing"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        ${(Math.random() * 200).toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t px-4 py-4 sm:px-6">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all orders
              </a>
            </div>
          </div>

          {/* Products section */}
          
        </main>
      </div>
    </div>
  )
}