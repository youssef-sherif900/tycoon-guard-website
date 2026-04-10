import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Briefcase, Camera, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "أمن وحراسة",
    description: "نحن نقدم خدمات الأمن والحراسة 24/7",
  },
  {
    icon: Briefcase,
    title: "خدمة إدارة المشاريع",
    description:
      "تأتي هذه الخدمة من مكتب تايكون جارد المتخصص حيث يقدم مكتب إدارة المشاريع تقارير وتدريبات وتوصيات حول استخدام البرمجيات الاحترافية",
  },
  {
    icon: Camera,
    title: "أجهزة إنذار وكاميرات مراقبة",
    description:
      "الأمن والحراسة لدينا قسم متخصص لبيع أجهزة الإنذار وكاميرات المراقبة وأحدث الأنظمة الإلكترونية لتركيبها على موقعك بالشكل المناسب كما لدينا فريق متكامل من الفنيين",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">خدمات شركة أمن وحراسة متخصصة في مصر</h2>
          <p className="text-lg text-muted-foreground mt-4">تايكون جارد - شركة أمن رائدة تقدم حلول أمنية متكاملة</p>
          <div className="h-1 w-24 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img
              src="/guard-images/guard-car-check.jpeg"
              alt="Tycoon Guard Services"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              تايكون جارد شركة أمن متخصصة في خدمات الأمن والحراسة وإدارة المشاريع. تأسست الشركة على يد فريق متخصص من الخبراء الأمنيين وذوي
              الخلفية العسكرية. وتتمتع شركة أمن تايكون جارد بخبرة واسعة في هذا المجال تتجاوز 12 عاماً. واستمدت الشركة مكانتها الرائدة
              في هذا المجال لما تتمتع به من أنظمة إدارية قوية وكيان يتميز بالانضباط والمتابعة...
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              المعايير العالمية المطبقة والاعتماد على أسس علمية ودراسات معتمدة تلبي احتياجات العملاء. يأتي ذلك في إطار
              اتباع تعليمات الجهات الرسمية المنظمة للعمل الأمني وبما يتوافق مع القواعد التي تحددها وزارة الداخلية.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                <a href="tel:01000006169" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  اتصل الأن
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-lg text-center"
            >
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-primary rounded-full mb-6">
                  <service.icon className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
            <Link href="/services" className="flex items-center gap-2">
              اكتشف جميع خدمات شركة أمن تايكون جارد
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
