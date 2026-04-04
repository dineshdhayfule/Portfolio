import { ReactNode } from "react"

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", type = "button", disabled = false }: {
  children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; className?: string; type?: "button" | "submit"; disabled?: boolean
}) {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-widest border-4 gap-2 transition-all"
  const variants: Record<string, string> = {
    primary: "bg-neo-accent border-black text-white shadow-neo-sm btn-push hover:opacity-90",
    secondary: "bg-neo-secondary border-black text-black shadow-neo-sm btn-push hover:opacity-90",
    outline: "bg-white border-black text-black shadow-neo-sm btn-push hover:bg-gray-50",
    ghost: "bg-transparent border-transparent text-black hover:border-black hover:shadow-neo-sm active:translate-y-[2px] active:translate-x-[2px]",
  }
  const sizes: Record<string, string> = { sm: "h-10 px-4 text-xs", md: "h-12 px-6 text-sm", lg: "h-14 px-8 text-base" }
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed active:translate-x-0 active:translate-y-0" : ""} ${className}`

  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
