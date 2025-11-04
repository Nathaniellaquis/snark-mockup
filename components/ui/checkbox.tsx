"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 size-4",
  {
    variants: {
      variant: {
        default: "border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        // Snark brand variants
        snark: "border-white/20 bg-white/5 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-violet-600 data-[state=checked]:to-fuchsia-600 data-[state=checked]:border-transparent data-[state=checked]:text-white focus-visible:border-violet-500 focus-visible:ring-violet-500/50 hover:border-white/30",
        snarkGlass: "border-white/30 bg-white/10 backdrop-blur-sm data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-violet-500 data-[state=checked]:to-fuchsia-500 data-[state=checked]:border-transparent data-[state=checked]:text-white focus-visible:border-fuchsia-500 focus-visible:ring-fuchsia-500/50",
        snarkOutline: "border-2 border-violet-500 bg-transparent data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600 data-[state=checked]:text-white focus-visible:ring-violet-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
