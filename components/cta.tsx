import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight">
              Ready to automate your business?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Let's talk about your workflow and see where AI can help. 
              No hard sell, just a conversation about what's possible.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
