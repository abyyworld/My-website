import Image from "next/image";

<Image
  src="/images/london-bia.jpg"
  alt="Akbar Juraev"
  width={400}
  height={400}
  className="rounded-xl"
/>


export function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-10">
          About
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="relative w-52 md:w-56 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/images/london-bia.jpg"
              alt="Akbar Juraev"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight">
              I help small businesses work smarter with AI
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Akbar, a solo builder focused on AI automation. I work with 
                solopreneurs and small teams to build tools that handle repetitive 
                tasks, qualify leads, and streamline operations.
              </p>
              <p>
                My approach is practical: understand your workflow, identify where 
                AI can actually help, then build something that fits your business. 
                No complex enterprise solutions. Just tools that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
