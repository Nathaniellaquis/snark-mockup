import * as React from "react"
import { Loader2Icon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin",
  {
    variants: {
      variant: {
        default: "text-current",
        snark: "text-violet-500",
        snarkFuchsia: "text-fuchsia-500",
        snarkWhite: "text-white",
      },
      size: {
        default: "size-4",
        sm: "size-3",
        lg: "size-6",
        xl: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Spinner({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
