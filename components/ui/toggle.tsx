"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        // Snark brand variants
        snark: "bg-white/5 text-white hover:bg-white/10 data-[state=on]:bg-gradient-to-r data-[state=on]:from-violet-600 data-[state=on]:to-fuchsia-600 border-2 border-white/10 hover:border-white/20",
        snarkGlass: "bg-white/10 text-white hover:bg-white/15 data-[state=on]:bg-white/20 data-[state=on]:backdrop-blur-sm border-2 border-white/20 hover:border-white/30",
        snarkGradient: "bg-white/5 text-white hover:bg-white/10 data-[state=on]:bg-gradient-to-r data-[state=on]:from-violet-500 data-[state=on]:to-fuchsia-500 data-[state=on]:shadow-lg data-[state=on]:shadow-violet-600/50",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
