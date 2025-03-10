"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import StatCard from "@/components/stat-card"
import MonthlySales from "@/components/monthly-sales"
import MonthlyTarget from "@/components/monthly-target"
import Statistics from "@/components/statistics"
import { Users, ShoppingBag } from "lucide-react"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-white border-b">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <div className="flex items-center flex-1 px-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search or type command..."
                className="w-full py-2 pl-10 pr-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="px-1.5 py-0.5 text-xs border rounded text-gray-500">⌘K</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="hidden font-medium md:inline">Musharof</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Customers"
              value="3,782"
              change={11.01}
              icon={<Users className="w-6 h-6 text-gray-600" />}
            />
            <StatCard
              title="Orders"
              value="5,359"
              change={-9.05}
              icon={<ShoppingBag className="w-6 h-6 text-gray-600" />}
            />
            <MonthlyTarget />
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MonthlySales />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Target</p>
                  <p className="flex items-center justify-center text-xl font-bold">
                    $20K
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 text-red-500"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="flex items-center justify-center text-xl font-bold">
                    $20K
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 text-green-500"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Today</p>
                  <p className="flex items-center justify-center text-xl font-bold">
                    $20K
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 text-green-500"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Statistics />
          </div>
        </main>
      </div>
    </div>
  )
}

