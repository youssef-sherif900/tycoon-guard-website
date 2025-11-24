import { Button } from "@/components/ui/button"
import { Phone, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('/security-guards-patrol.jpg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-secondary">تايكون جارد</span>
            <br />
            الأفضل في مجال الأمن والحراسة
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed text-pretty">
            تايكون جارد لخدمات الأمن والحراسة وإدارة المشاريع. تأسست الشركة على يد فريق متخصص من الخبراء الأمنيين وذوي
            الخلفية العسكرية. وتتمتع الشركة بخبرة واسعة في هذا المجال تتجاوز 12 عاماً.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8">
              <a href="#services" className="flex items-center gap-2">
                إكتشف خدماتنا
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary text-lg px-8 bg-transparent"
            >
              <a href="tel:01000006169" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                اتصل الآن
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
