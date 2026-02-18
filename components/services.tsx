import { Zap, FileText, Link2, Bot } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Lead Capture Tools",
    description:
      "Smart forms and chatbots that qualify leads automatically. Know who's ready to buy before you get on a call.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect your tools and automate repetitive tasks. From email sequences to data entry, let AI handle the busywork.",
  },
  {
    icon: FileText,
    title: "AI-Powered Forms",
    description:
      "Forms that adapt, summarize responses, and score leads using AI. Get actionable insights from every submission.",
  },
  {
    icon: Link2,
    title: "Tool Integrations",
    description:
      "Connect your CRM, email, calendar, and other tools into one seamless system. Everything talks to everything.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-accent text-sm font-medium tracking-wide uppercase">
              Services
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight">
              AI tools and automations built for your business
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
            >
              <service.icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
