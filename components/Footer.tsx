export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Dinesh Dhayfule. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </div>
        </footer>
    )
}
