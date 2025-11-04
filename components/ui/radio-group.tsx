"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

const radioGroupItemVariants = cva(
  "aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30",
        // Snark brand variants
        snark: "border-white/20 bg-white/5 text-white focus-visible:border-violet-500 focus-visible:ring-violet-500/50 hover:border-white/30 data-[state=checked]:border-violet-500 data-[state=checked]:bg-violet-600/20",
        snarkGlass: "border-white/30 bg-white/10 backdrop-blur-sm text-white focus-visible:border-fuchsia-500 focus-visible:ring-fuchsia-500/50 data-[state=checked]:border-fuchsia-500 data-[state=checked]:bg-fuchsia-600/20",
        snarkGradient: "border-white/20 bg-white/5 text-white focus-visible:border-violet-500 focus-visible:ring-violet-500/50 data-[state=checked]:border-transparent data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-violet-600 data-[state=checked]:to-fuchsia-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function RadioGroupItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioGroupItemVariants>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ variant }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-current absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants }
