import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input dark:bg-input/30 border bg-transparent",
        // Snark brand variants
        snark: "bg-white/5 border-2 border-white/10 text-white placeholder:text-gray-500 focus-visible:border-violet-500 focus-visible:ring-violet-500/50 hover:border-white/20",
        snarkGlass: "bg-white/10 border-2 border-white/20 backdrop-blur-xl text-white placeholder:text-gray-400 focus-visible:border-fuchsia-500 focus-visible:ring-fuchsia-500/50",
        snarkSolid: "bg-neutral-900 border-2 border-white/10 text-white placeholder:text-gray-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
