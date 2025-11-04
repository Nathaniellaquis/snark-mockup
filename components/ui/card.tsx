import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "flex flex-col gap-6 rounded-xl shadow-sm transition-all [&_*]:text-white [&_.text-gray-300]:text-gray-300 [&_.text-gray-400]:text-gray-400 [&_.text-gray-500]:text-gray-500 [&_.text-violet-400]:text-violet-400 [&_.text-fuchsia-400]:text-fuchsia-400 [&_.text-purple-400]:text-purple-400 [&_.text-green-400]:text-green-400 [&_.text-red-400]:text-red-400",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border py-6",
        // Snark brand variants
        snarkGlass: "bg-white/5 border-2 border-white/10 backdrop-blur-sm py-6 hover:border-white/20",
        snarkGlassBold: "bg-white/10 border-2 border-white/20 backdrop-blur-xl py-8 hover:shadow-xl",
        snarkGradient: "bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 border-2 border-white/10 py-6 hover:from-violet-600/20 hover:to-fuchsia-600/20",
        snarkSolid: "bg-neutral-900 border-2 border-white/10 py-6 hover:border-violet-500/50",
        snarkHover: "bg-white/5 border-2 border-white/10 py-6 hover:scale-[1.02] hover:border-white/30 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

const cardTitleVariants = cva(
  "leading-none font-semibold text-white",
  {
    variants: {
      variant: {
        default: "",
        snark: "font-black tracking-tight text-2xl",
        snarkGradient: "font-black tracking-tight text-2xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function CardTitle({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardTitleVariants>) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
  cardTitleVariants,
}
