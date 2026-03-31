import { ReactNode } from "react"

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", type = "button", disabled = false }: {
  children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; className?: string; type?: "button" | "submit"; disabled?: boolean
}) {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 gap-2"
  const variants: Record<string, string> = {
    primary: "bg-accent hover:bg-secondary !text-black border border-transparent [&_svg]:!text-black [&_span]:!text-black",
    secondary: "bg-transparent hover:bg-secondary/10 hover:text-secondary text-content-primary border border-[var(--border)]",
    outline: "bg-transparent hover:bg-secondary/12 text-secondary border border-secondary/40",
    ghost: "bg-transparent hover:bg-bg-card text-content-secondary hover:text-content-primary",
  }
  const sizes: Record<string, string> = { sm: "px-4 py-2 text-sm", md: "px-6 py-2.5 text-sm", lg: "px-8 py-3 text-base" }
  const primaryForce = variant === "primary" ? "btn-primary-force" : ""
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${primaryForce} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`

  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
