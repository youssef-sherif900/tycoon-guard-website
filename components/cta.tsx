import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-primary-foreground mb-6 text-balance">
            احصل على الأمن والأمان الذي تبحث عنه مع تايكون جارد
            <br />
            <span className="text-secondary relative top-2  ">أفضل شركة أمن وحراسة</span>
          </h2>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-xl px-12">
            <a href="tel:01000006169" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              01000006169
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
