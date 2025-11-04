import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      variant: {
        default: "bg-accent",
        snark: "bg-white/10",
        snarkGlass: "bg-white/20 backdrop-blur-sm",
        snarkGradient: "bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Skeleton({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
