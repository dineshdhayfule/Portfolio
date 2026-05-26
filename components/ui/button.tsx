import { ReactNode } from "react"

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", type = "button", disabled = false }: {
  children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; className?: string; type?: "button" | "submit"; disabled?: boolean
}) {
  const base = "inline-flex items-center justify-center font-bold rounded-xl border-[3px] gap-2 btn-push"
  const variants: Record<string, string> = {
    primary: "bg-black border-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-[#FDB927] border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-white border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
    ghost: "bg-transparent border-transparent text-black hover:border-black shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
  }
  const sizes: Record<string, string> = { sm: "min-h-[40px] px-4 py-2 text-sm", md: "min-h-[56px] px-8 text-base", lg: "min-h-[64px] px-10 text-lg" }
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed btn-push-none" : ""} ${className}`

  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
