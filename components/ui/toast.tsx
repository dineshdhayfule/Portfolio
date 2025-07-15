"use client"

import * as React from "react"
import { ToastAction as ToastActionPrimitive } from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastActionPrimitive.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastActionPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastActionPrimitive.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastActionPrimitive.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = ToastActionPrimitive.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastActionPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastActionPrimitive.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastActionPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastActionPrimitive.Close>
))
ToastClose.displayName = ToastActionPrimitive.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastActionPrimitive.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
))
ToastTitle.displayName = ToastActionPrimitive.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastActionPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastActionPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastActionPrimitive.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
))
ToastDescription.displayName = ToastActionPrimitive.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ElementRef<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
