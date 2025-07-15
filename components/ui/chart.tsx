"use client"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
} from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const Chart = ({ type, data, categories, index, className, ...props }) => {
  const ChartComponent =
    type === "line"
      ? LineChart
      : type === "bar"
        ? BarChart
        : type === "pie"
          ? PieChart
          : type === "radialbar"
            ? RadialBarChart
            : type === "area"
              ? AreaChart
              : null

  if (!ChartComponent) {
    console.error("Invalid chart type provided.")
    return null
  }

  const renderChartElements = () => {
    switch (type) {
      case "line":
        return categories.map((category) => (
          <Line
            key={category.dataKey}
            dataKey={category.dataKey}
            stroke={category.stroke}
            fill={category.fill}
            type="monotone"
            strokeWidth={2}
            dot={false}
          />
        ))
      case "bar":
        return categories.map((category) => (
          <Bar key={category.dataKey} dataKey={category.dataKey} fill={category.fill} radius={[4, 4, 0, 0]} />
        ))
      case "area":
        return categories.map((category) => (
          <Area
            key={category.dataKey}
            dataKey={category.dataKey}
            stroke={category.stroke}
            fill={category.fill}
            type="monotone"
          />
        ))
      case "pie":
        return <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label />
      case "radialbar":
        return <RadialBar dataKey="value" background clockWise data={data} fill="#8884d8" />
      default:
        return null
    }
  }

  return (
    <ChartContainer
      config={Object.fromEntries(
        categories.map((category) => [category.dataKey, { color: category.stroke || category.fill }]),
      )}
      className={className}
      {...props}
    >
      <ChartComponent data={data} margin={{ left: 12, right: 12 }} {...props}>
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        {renderChartElements()}
      </ChartComponent>
    </ChartContainer>
  )
}

export { Chart }
