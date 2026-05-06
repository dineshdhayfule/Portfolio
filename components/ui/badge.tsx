export default function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "accent" | "success" | "outline"; className?: string }) {
  const v = {
    default: "bg-white text-foreground border border-gray-200 shadow-soft-sm",
    accent: "bg-accent text-white border border-transparent shadow-soft-sm",
    success: "bg-accentAlt/15 text-foreground border border-accentAlt/20 shadow-none",
    outline: "bg-transparent text-foreground border border-gray-200 shadow-none",
  }
  return <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest ${v[variant]} ${className}`}>{children}</span>
}
