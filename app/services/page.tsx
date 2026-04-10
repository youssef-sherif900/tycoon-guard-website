import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Briefcase, Camera, Phone, Clock, Users, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "خدماتنا - تايكون جارد | شركة أمن وحراسة متخصصة في مصر",
  description:
    "اكتشف خدمات شركة أمن تايكون جارد: أمن وحراسة 24/7، إدارة المشاريع، كاميرات المراقبة، وأجهزة الإنذار. شركة أمن متخصصة تقدم حلول أمنية متكاملة.",
  keywords: [
    "شركة أمن",
    "خدمات أمن وحراسة",
    "حراسة 24/7",
    "كاميرات مراقبة",
    "أجهزة إنذار",
    "إدارة مشاريع أمنية",
    "شركات أمن في مصر",
    "خدمات حراسة",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "خدماتنا - تايكون جارد | شركة أمن وحراسة",
    description: "خدمات أمنية متكاملة من شركة أمن تايكون جارد: حراسة، مراقبة، وإدارة مشاريع",
    url: "https://tycoon-guard.com/services",
  },
}

const services = [
  {
    icon: Shield,
    title: "أمن وحراسة 24/7",
    description:
      "نقدم خدمات الأمن والحراسة على مدار الساعة طوال أيام الأسبوع. شركة أمن تايكون جارد توفر حراس أمن محترفين مدربين على أعلى مستوى لضمان حماية ممتلكاتك ومنشآتك. نقدم خدمات حراسة للمنشآت الحكومية والخاصة، الشركات، المصانع، المستشفيات، المدارس، والمجمعات السكنية.",
    features: [
      "حراسة على مدار 24/7",
      "فريق من الضباط السابقين",
      "دوريات أمنية منتظمة",
      "نقاط تفتيش أمنية",
      "استجابة سريعة للطوارئ",
    ],
    image: "/guard-images/guard-car-check.jpeg",
  },
  {
    icon: Briefcase,
    title: "خدمة إدارة المشاريع",
    description:
      "تأتي هذه الخدمة من مكتب تايكون جارد المتخصص حيث يقدم مكتب إدارة المشاريع تقارير وتدريبات وتوصيات حول استخدام البرمجيات الاحترافية. شركة أمن تايكون جارد تقدم استشارات إدارية متخصصة في مجال الأمن والحراسة لضمان نجاح مشاريعك الأمنية.",
    features: [
      "تخطيط استراتيجي أمني",
      "دراسات أمنية متخصصة",
      "تدريب الفرق الأمنية",
      "تقييم المخاطر",
      "تطوير الخطط الأمنية",
    ],
    image: "/guard-images/guard-construction-site.jpeg",
  },
  {
    icon: Camera,
    title: "أجهزة إنذار وكاميرات مراقبة",
    description:
      "شركة أمن تايكون جارد لديها قسم متخصص لبيع أجهزة الإنذار وكاميرات المراقبة وأحدث الأنظمة الإلكترونية لتركيبها على موقعك بالشكل المناسب. كما لدينا فريق متكامل من الفنيين المتخصصين في تركيب وصيانة هذه الأنظمة.",
    features: [
      "كاميرات مراقبة عالية الجودة",
      "أنظمة إنذار متطورة",
      "مراقبة عن بُعد",
      "تسجيل ومتابعة مستمرة",
      "صيانة ودعم فني",
    ],
    image: "/guard-images/guard-camera-2.jpeg",
  },
]

const additionalServices = [
  {
    title: "تأمين الفعاليات",
    description: "تأمين شامل للمؤتمرات، المعارض، الحفلات، والفعاليات الخاصة",
  },
  {
    title: "الاستشارات الأمنية",
    description: "استشارات أمنية مبنية على دراسات علمية معمقة من خبراء متخصصين",
  },
  {
    title: "التدريب الأمني",
    description: "برامج تدريبية متخصصة للفرق الأمنية على أحدث المعايير والممارسات",
  },
  {
    title: "تقييم المخاطر",
    description: "تحليل شامل للمخاطر الأمنية وتقديم حلول استباقية",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              خدمات شركة أمن تايكون جارد
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              حلول أمنية متكاملة من شركة أمن وحراسة رائدة
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              تايكون جارد شركة أمن متخصصة تقدم مجموعة شاملة من خدمات الأمن والحراسة في مصر. خبرة تتجاوز 12 عاماً في حماية المنشآت والأفراد.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              خدماتنا الرئيسية
            </h2>
            <p className="text-lg text-muted-foreground">
              شركة أمن تايكون جارد تقدم خدمات أمنية متكاملة ومتطورة
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto mt-4" />
          </div>

          <div className="space-y-20 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex p-4 bg-primary rounded-full mb-6">
                    <service.icon className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                    <a href="tel:01000006169" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      استفسر عن الخدمة
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                خدمات إضافية من شركة أمن تايكون جارد
              </h2>
              <p className="text-lg text-muted-foreground">
                حلول أمنية متخصصة تلبي جميع احتياجاتك
              </p>
              <div className="h-1 w-24 bg-secondary mx-auto mt-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-primary/20 hover:border-secondary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Our Services */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                لماذا تختار خدمات شركة أمن تايكون جارد؟
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">خدمة 24/7</h3>
                <p className="text-muted-foreground">خدمات أمنية متاحة على مدار الساعة</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">فريق محترف</h3>
                <p className="text-muted-foreground">ضباط سابقون وخبراء أمنيون مدربون</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">خبرة 12 عاماً</h3>
                <p className="text-muted-foreground">خبرة واسعة في مجال الأمن والحراسة</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-lg p-8 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">احصل على أفضل خدمات الأمن والحراسة</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              تواصل مع شركة أمن تايكون جارد اليوم واحصل على استشارة مجانية
            </p>
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              <a href="tel:01000006169" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                اتصل بنا الآن: 01000006169
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

