import { ReactNode } from "react"

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", type = "button", disabled = false }: {
  children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; className?: string; type?: "button" | "submit"; disabled?: boolean
}) {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-widest border gap-2 transition-all"
  const variants: Record<string, string> = {
    primary: "bg-accent text-white border-transparent shadow-soft-sm hover:shadow-soft-md hover:opacity-95",
    secondary: "bg-accentAlt text-foreground border-transparent shadow-soft-sm hover:shadow-soft-md hover:opacity-95",
    outline: "bg-white border border-gray-200 text-foreground hover:bg-gray-50 shadow-none",
    ghost: "bg-transparent border-transparent text-foreground hover:border-gray-200 hover:shadow-soft-sm",
  }
  const sizes: Record<string, string> = { sm: "min-h-[48px] px-4 py-2 text-xs", md: "min-h-[48px] px-6 text-sm", lg: "min-h-[56px] px-8 text-base" }
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed active:translate-x-0 active:translate-y-0" : ""} ${className}`

  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
