export default function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "accent" | "success" | "outline"; className?: string }) {
  const v = {
    default: "bg-bg-card text-content-secondary border border-[var(--border)]",
    accent: "bg-accent-soft/10 text-accent-soft border border-secondary/30",
    success: "bg-success/10 text-success border border-success/20",
    outline: "bg-transparent text-content-secondary border border-[var(--border)]",
  }
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${v[variant]} ${className}`}>{children}</span>
}
