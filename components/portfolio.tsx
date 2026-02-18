import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Lead Qualifier Bot",
    category: "AI Automation",
    description:
      "Automated lead scoring system for a coaching business. Reduced time spent on unqualified calls by 60%.",
  },
  {
    title: "Client Onboarding Flow",
    category: "Workflow",
    description:
      "End-to-end onboarding automation including contracts, payments, and welcome sequences.",
  },
  {
    title: "Content Repurposing Tool",
    category: "AI Tool",
    description:
      "AI-powered tool that transforms long-form content into social posts, emails, and threads.",
  },
  {
    title: "CRM Integration Suite",
    category: "Integration",
    description:
      "Connected Notion, Calendly, Stripe, and email into a unified client management system.",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-accent text-sm font-medium tracking-wide uppercase">
              Portfolio
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight">
              Recent projects
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
