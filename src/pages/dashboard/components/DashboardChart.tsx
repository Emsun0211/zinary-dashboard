"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { CardHeader,
      Card,
  CardContent,

  CardFooter,

  CardTitle,
 } from "../../../components/ui/card"


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart"

import { GoDotFill } from "react-icons/go"
const chartData = [
  { month: "2", withdrawal: 186, deposit: 80 },
  { month: "4", withdrawal: 305, deposit: 200 },
  { month: "6", withdrawal: 237, deposit: 120 },
  { month: "8", withdrawal: 73, deposit: 190 },
  { month: "10", withdrawal: 209, deposit: 130 },
  { month: "12", withdrawal: 204, deposit: 100 },
  { month: "14", withdrawal: 114, deposit: 170 },
  { month: "16", withdrawal: 124, deposit: 100 },
]

const chartConfig = {
  withdrawal: {
    label: "Withdrawal",
    color: "hsl(var(--chart-1))",
  },
  deposit: {
    label: "Deposit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const lists = ["Withdrawal", "Deposit", "Payment"]

export function ChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-left text-xs font-bold">Real Time Update</CardTitle>
        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="withdrawal"
              type="monotone"
              stroke="var(--color-withdrawal)"
              strokeWidth={3}
              dot={false}
              
            />
            <Line
              dataKey="deposit"
              type="monotone"
              stroke="var(--color-deposit)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center items-center max-w-[32rem] mx-auto bg-[#F4F4F4] py-2 px-10 rounded-lg mb-4">
        <div className='flex items-center justify-between w-full mx-auto'>
          {lists.map((list, i)=><div key={i} className="flex items-center gap-2 text-[#C4C4C4] font-semibold">
            <GoDotFill size={20} color={list === 'Withdrawal' ? "#FFDB8B" : list === "Deposit" ? "#FF6600" : "#C4C4C4"}/>
            <span>{list}</span>
          </div>)}
          
        </div>
      </CardFooter>
    </Card>
  )
}
