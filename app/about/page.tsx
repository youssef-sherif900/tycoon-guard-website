import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Award, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "من نحن - تايكون جارد | شركة أمن وحراسة رائدة في مصر",
  description:
    "تعرف على تايكون جارد - شركة أمن وحراسة متخصصة في مصر بخبرة تتجاوز 12 عاماً. نقدم خدمات أمنية متكاملة مع فريق من الضباط السابقين والخبراء الأمنيين.",
  keywords: [
    "شركة أمن",
    "شركة حراسة",
    "من نحن",
    "تايكون جارد",
    "شركات أمن في مصر",
    "شركات حراسة في القاهرة",
    "خدمات أمن وحراسة",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "من نحن - تايكون جارد | شركة أمن وحراسة رائدة",
    description: "تعرف على شركة أمن تايكون جارد - خبرة 12 عاماً في مجال الأمن والحراسة في مصر",
    url: "https://tycoon-guard.com/about",
  },
}

const features = [
  {
    icon: Shield,
    title: "تراكم الخبرة",
    description:
      "وذلك بفضل وجود نخبة من الضباط السابقين من القوات المسلحة والشرطة الذين لديهم خبرة في المجال الأمني والمعروفين بكفاءتهم. شركة أمن تايكون جارد تعتمد على خبرة عسكرية وأمنية واسعة تضمن أعلى مستويات الحماية.",
    image: "/guard-images/guard-fence.jpeg",
  },
  {
    icon: TrendingUp,
    title: "النمط الإداري",
    description:
      "يتميز الأسلوب الإداري في تايكون جارد بعناصر مهمة جداً في العملية الإدارية والتي تشمل اتباع المنهج العلمي، والأسلوب الحديث في الإدارة، والخبرة الواسعة التي تمتلكها الإدارة. شركة أمن متخصصة تتبع أفضل الممارسات الإدارية العالمية.",
    image: "/guard-images/guard-car-check.jpeg",
  },
  {
    icon: Users,
    title: "كفاءة العنصر البشري",
    description:
      "نظراً لأهمية الدور الذي يقوم به الفرد والمهام المطلوبة منه، فإننا نقوم باختيار الأفراد بعناية فائقة ووفقاً لمجموعة من المعايير التي نتبعها. شركة أمن تايكون جارد تضمن أن كل فرد في فريقنا مدرب ومؤهل على أعلى مستوى.",
    image: "/guard-images/guard-camera.jpeg",
  },
]

const stats = [
  { icon: Clock, label: "سنوات الخبرة", value: "12+", description: "أكثر من 12 عاماً من الخبرة في مجال الأمن والحراسة" },
  { icon: Users, label: "فريق محترف", value: "500+", description: "فريق من الضباط السابقين والخبراء الأمنيين" },
  { icon: Award, label: "عملاء راضون", value: "1000+", description: "عملاء راضون عن خدمات شركة أمن تايكون جارد" },
  { icon: MapPin, label: "التغطية", value: "مصر", description: "خدمات أمنية في جميع أنحاء جمهورية مصر العربية" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              من نحن - تايكون جارد
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              شركة أمن وحراسة رائدة في مصر
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              تايكون جارد شركة أمن متخصصة في خدمات الأمن والحراسة وإدارة المشاريع. تأسست الشركة على يد فريق متخصص من الخبراء الأمنيين وذوي الخلفية العسكرية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">
              شركة أمن تايكون جارد - قصة النجاح
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                تايكون جارد شركة أمن وحراسة متخصصة تأسست على يد فريق من الخبراء الأمنيين وذوي الخلفية العسكرية. تتمتع الشركة بخبرة واسعة في مجال الأمن والحراسة تتجاوز 12 عاماً، مما جعلها واحدة من أبرز شركات الأمن والحراسة في مصر.
              </p>
              <p>
                شركة أمن تايكون جارد استمدت مكانتها الرائدة في هذا المجال لما تتمتع به من أنظمة إدارية قوية وكيان يتميز بالانضباط والمتابعة المستمرة. نتبع المعايير العالمية المطبقة والاعتماد على أسس علمية ودراسات معتمدة تلبي احتياجات العملاء.
              </p>
              <p>
                يأتي ذلك في إطار اتباع تعليمات الجهات الرسمية المنظمة للعمل الأمني وبما يتوافق مع القواعد التي تحددها وزارة الداخلية. شركة أمن تايكون جارد ملتزمة بتقديم خدمات أمنية متكاملة على مدار الساعة.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-primary rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              مميزات شركة أمن تايكون جارد
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ما يجعلنا أفضل شركة أمن وحراسة في مصر
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20">
                <div className="relative h-48 bg-primary/5">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                  <feature.icon className="absolute bottom-4 right-4 h-12 w-12 text-secondary z-10" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-lg p-8 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">هل تبحث عن شركة أمن موثوقة؟</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              تواصل مع شركة أمن تايكون جارد اليوم واحصل على أفضل خدمات الأمن والحراسة
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

