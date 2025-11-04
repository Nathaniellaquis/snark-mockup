"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "size-8",
        snark: "size-8 ring-2 ring-violet-600/50",
        snarkGlow: "size-8 ring-2 ring-violet-500 shadow-lg shadow-violet-600/50",
        snarkLarge: "size-12 ring-2 ring-violet-600/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Avatar({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ variant }), className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-muted",
        snark: "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white font-bold",
        snarkGlass: "bg-white/10 backdrop-blur-sm text-white font-bold",
        snarkSolid: "bg-neutral-900 text-white font-bold border-2 border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function AvatarFallback({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & VariantProps<typeof avatarFallbackVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants, avatarFallbackVariants }
