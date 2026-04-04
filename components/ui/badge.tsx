export default function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "accent" | "success" | "outline"; className?: string }) {
  const v = {
    default: "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    accent: "bg-neo-accent text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    success: "bg-neo-secondary text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-transparent text-black bg-white shadow-none",
  }
  return <span className={`inline-flex items-center px-4 py-1.5 rounded-full border-4 border-black text-xs font-bold uppercase tracking-widest ${v[variant]} ${className}`}>{children}</span>
}
