"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const slides = [
  {
    title: "تايكون جارد",
    subtitle: "أفضل شركة أمن وحراسة في مصر",
    description:
      "تايكون جارد شركة أمن متخصصة في خدمات الأمن والحراسة وإدارة المشاريع. تأسست الشركة على يد فريق متخصص من الخبراء الأمنيين وذوي الخلفية العسكرية.",
    image: "/guard-images/guard-receiption.jpeg",
  },
  {
    title: "حماية متطورة",
    subtitle: "أنظمة أمنية على أعلى مستوى",
    description:
      "نوفر أحدث تقنيات المراقبة والأمن مع فريق مدرب على أعلى مستوى لضمان سلامتك وحماية ممتلكاتك على مدار الساعة.",
    image: "/guard-images/guard-camera.jpeg",
  },
  {
    title: "خبرة 12 عاماً",
    subtitle: "ثقة وكفاءة مثبتة",
    description:
      "أكثر من عقد من الخبرة في تقديم حلول أمنية متكاملة للمنشآت الحكومية والخاصة والأفراد في جميع أنحاء مصر.",
    image: "/guard-images/guard-fence.jpeg",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40 bg-black/40 mix-blend-multiply" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute inset-0"
                }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-secondary drop-shadow-lg leading-relaxed">{slide.title}</span>
                <br />
                {slide.subtitle}
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed text-pretty max-w-3xl mx-auto">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <a href="#services" className="flex items-center gap-2">
                    إكتشف خدماتنا
                    <ArrowDown className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <a href="tel:01000006169" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    اتصل الآن
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${index === currentSlide
                ? "bg-secondary w-12"
                : "bg-primary-foreground/50 w-3 hover:bg-primary-foreground/70"
              }`}
            aria-label={`الذهاب إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
