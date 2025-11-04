"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sliderTrackVariants = cva(
  "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
  {
    variants: {
      variant: {
        default: "bg-muted",
        snark: "bg-white/10",
        snarkGlow: "bg-white/10 shadow-inner",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderRangeVariants = cva(
  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      variant: {
        default: "bg-primary",
        snark: "bg-gradient-to-r from-violet-600 to-fuchsia-600",
        snarkGlow: "bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-600/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderThumbVariants = cva(
  "block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary ring-ring/50",
        snark: "border-violet-600 ring-violet-500/50 hover:shadow-lg hover:shadow-violet-600/50",
        snarkGlow: "border-fuchsia-600 ring-fuchsia-500/50 shadow-fuchsia-600/30 hover:shadow-fuchsia-600/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & VariantProps<typeof sliderTrackVariants>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(sliderTrackVariants({ variant }))}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(sliderRangeVariants({ variant }))}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(sliderThumbVariants({ variant }))}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider, sliderTrackVariants, sliderRangeVariants, sliderThumbVariants }
