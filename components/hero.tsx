import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm font-medium mb-4 tracking-wide uppercase">
          AI Automation Builder
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight max-w-3xl text-balance">
          AI tools that save you time and bring you clients
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I build custom AI automations for solopreneurs, creators, and small businesses. 
          Less manual work, more qualified leads, better systems.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
