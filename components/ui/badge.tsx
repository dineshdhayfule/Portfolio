export default function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "accent" | "success" | "outline"; className?: string }) {
  const v = {
    default: "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:bg-[#0f0f0f] dark:text-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
    accent: "bg-[var(--accent)] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
    success: "bg-green-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
    outline: "bg-transparent text-black shadow-none dark:text-white",
  }
  return <span className={`inline-flex items-center px-3 py-1 rounded-full border-[2px] border-black dark:border-[#383838] text-xs font-semibold ${v[variant]} ${className}`}>{children}</span>
}
