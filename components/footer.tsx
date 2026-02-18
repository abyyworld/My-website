import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-foreground font-medium">Akbar Juraev</p>
            <p className="text-muted-foreground text-sm mt-1">
              AI Automation Builder
            </p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <Link href="mailto:hello@abyyai.com" className="text-sm">
              hello@abyyai.com
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            2026 Akbar Juraev. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
