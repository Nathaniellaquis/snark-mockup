"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80",
        // Snark brand variants
        snark: "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-violet-600 data-[state=checked]:to-fuchsia-600 data-[state=unchecked]:bg-white/10 data-[state=unchecked]:border-white/20 focus-visible:ring-violet-500/50 hover:data-[state=unchecked]:bg-white/15",
        snarkGlass: "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-violet-500 data-[state=checked]:to-fuchsia-500 data-[state=unchecked]:bg-white/20 data-[state=unchecked]:border-white/30 data-[state=unchecked]:backdrop-blur-sm focus-visible:ring-fuchsia-500/50",
        snarkSolid: "data-[state=checked]:bg-violet-600 data-[state=unchecked]:bg-neutral-900 data-[state=unchecked]:border-white/20 focus-visible:ring-violet-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Switch({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
          variant?.includes("snark") && "data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, switchVariants }
