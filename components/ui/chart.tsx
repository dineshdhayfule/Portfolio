"use client"

import * as React from "react"
import {
  LabelList,
  type LabelListProps,
  ResponsiveContainer,
  XAxis,
  type XAxisProps,
  type YAxisProps,
  CartesianGrid,
  type CartesianGridProps,
  Legend,
  type LegendProps,
  Tooltip,
  type TooltipProps,
} from "recharts"

import { cn } from "@/lib/utils"

// region Chart

const ChartContext = React.createContext<ChartContextProps>({})

type ChartContextProps = {
  data?: Record<string, any>[]
  categories?: string[]
  index?: string
  colors?: string[]
}

function Chart({
  data,
  categories,
  index,
  colors,
  className,
  children,
  ...props
}: ChartContextProps & React.ComponentPropsWithoutRef<"div">) {
  const customColors = colors ?? ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF0000"]

  return (
    <ChartContext.Provider value={{ data, categories, index, colors: customColors }}>
      <div className={cn("h-[400px] w-full", className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

// endregion

// region ChartAxis

const ChartAxis = ({ className, ...props }: XAxisProps | YAxisProps | React.ComponentPropsWithoutRef<"div">) => {
  return <XAxis className={cn("text-sm", className)} stroke="hsl(var(--chart-axis))" {...props} />
}

// endregion

// region ChartGrid

const ChartGrid = ({ className, ...props }: CartesianGridProps | React.ComponentPropsWithoutRef<"div">) => {
  return <CartesianGrid className={cn("stroke-dashed", className)} stroke="hsl(var(--chart-grid))" {...props} />
}

// endregion

// region ChartLegend

const ChartLegend = ({ className, ...props }: LegendProps | React.ComponentPropsWithoutRef<"div">) => {
  return <Legend className={cn("text-sm", className)} wrapperStyle={{ outline: "none" }} {...props} />
}

// endregion

// region ChartTooltip

const ChartTooltip = ({ className, ...props }: TooltipProps<any, any> | React.ComponentPropsWithoutRef<"div">) => {
  return (
    <Tooltip
      className={cn("rounded-lg border bg-background p-2 shadow-sm", className)}
      cursor={{ stroke: "hsl(var(--chart-tooltip-cursor))", strokeDasharray: "8 8" }}
      wrapperStyle={{ outline: "none" }}
      {...props}
    />
  )
}

// endregion

// region ChartLabelList

const ChartLabelList = ({ className, ...props }: LabelListProps<any> | React.ComponentPropsWithoutRef<"div">) => {
  return <LabelList className={cn("fill-foreground", className)} {...props} />
}

// endregion

export { Chart, ChartAxis, ChartGrid, ChartLegend, ChartTooltip, ChartLabelList }
