import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Settings, Zap, Monitor, MessageSquare, Eye, Shield, Award, Users, Clock, CheckCircle } from "lucide-react"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "لماذا نحن - تايكون جارد | أفضل شركة أمن وحراسة في مصر",
  description:
    "اكتشف لماذا تايكون جارد هي أفضل شركة أمن وحراسة في مصر. خبرة 12 عاماً، فريق من الضباط السابقين، أحدث التقنيات، واستجابة سريعة. شركة أمن موثوقة.",
  keywords: [
    "شركة أمن",
    "أفضل شركة أمن",
    "لماذا تايكون جارد",
    "شركات أمن في مصر",
    "شركة حراسة موثوقة",
    "خدمات أمن وحراسة",
    "شركة أمن محترفة",
  ],
  alternates: {
    canonical: "/why-us",
  },
  openGraph: {
    title: "لماذا نحن - تايكون جارد | أفضل شركة أمن وحراسة",
    description: "اكتشف مميزات شركة أمن تايكون جارد ولماذا نحن الخيار الأمثل لك",
    url: "https://tycoon-guard.com/why-us",
  },
}

const reasons = [
  {
    icon: Target,
    title: "تخطيط استراتيجي",
    description:
      "إجراء دراسة كاملة للموقع ومعرفة ما يحتاجه وما تحتاجه المنشأة التي تقدم لها الخدمات من قبل شركة أمن تايكون جارد سواء من الأفراد والمعدات اللازمة. نضع خطة أمنية شاملة مخصصة لاحتياجاتك.",
    longDescription:
      "شركة أمن تايكون جارد تبدأ كل مشروع بدراسة شاملة للموقع والمنشأة. نحلل المخاطر الأمنية المحتملة ونحدد المتطلبات بدقة. فريقنا من الخبراء يضع خطة استراتيجية مخصصة تضمن أعلى مستويات الحماية.",
  },
  {
    icon: Settings,
    title: "تصميم و تنفيذ",
    description:
      "تشمل خدمات الأجهزة الإلكترونية والوسائل التكنولوجية الحاصلة على ترخيص من الهيئة القومية للاتصالات لحراسة العمل ووضع خطة لإدارة المخاطر والتدخل السريع. شركة أمن تايكون جارد تستخدم أحدث التقنيات.",
    longDescription:
      "نصمم وننفذ أنظمة أمنية متكاملة تشمل الأجهزة الإلكترونية والتقنيات الحديثة. جميع أنظمتنا معتمدة من الهيئة القومية للاتصالات. نضع خطط إدارة مخاطر شاملة ونضمن استجابة سريعة لأي طوارئ.",
  },
  {
    icon: Zap,
    title: "سرعة الاستجابة",
    description:
      "التدخل السريع في حالات الطوارئ، وإذا كان العميل يحتاج إلينا، فهذا يضمن أننا موجودون دائمًا من أجله. شركة أمن تايكون جارد توفر استجابة فورية على مدار الساعة.",
    longDescription:
      "شركة أمن تايكون جارد تفهم أهمية الوقت في المواقف الأمنية الحرجة. لدينا فرق استجابة سريعة جاهزة للتدخل في أي لحظة. نظامنا الأمني يضمن التواصل الفوري والاستجابة السريعة لأي طارئ.",
  },
  {
    icon: Monitor,
    title: "أحدث التقنيات والمعدات",
    description:
      "الجانب التكنولوجي لا يقل أهمية عن الموارد البشرية حيث نعتمد على أحدث الأجهزة والمعدات المستخدمة في عملية التأمين والحالات المشبوهة. شركة أمن تايكون جارد تستثمر في التكنولوجيا.",
    longDescription:
      "نستثمر باستمرار في أحدث التقنيات الأمنية. من كاميرات المراقبة عالية الدقة إلى أنظمة الإنذار المتطورة، شركة أمن تايكون جارد تستخدم أفضل المعدات المتاحة. التكنولوجيا الحديثة تكمل خبرة فريقنا البشري.",
  },
  {
    icon: MessageSquare,
    title: "الاستشارات الأمنية",
    description:
      "نقدم استشارات أمنية مبنية على دراسات علمية معمقة ونظرة أمنية مع الخبرة الواسعة التي نمتلكها بفضل كوادر ذات خبرة عالية. شركة أمن تايكون جارد توفر خبرة استشارية متخصصة.",
    longDescription:
      "فريقنا من الخبراء يقدم استشارات أمنية شاملة مبنية على دراسات علمية معمقة. نحلل المخاطر، نقيّم الوضع الأمني، ونقدم توصيات عملية. خبرتنا الواسعة في مجال الأمن والحراسة تضمن لك أفضل النصائح.",
  },
  {
    icon: Eye,
    title: "المتابعة والإشراف المستمر",
    description:
      "نقوم بإجراء الفحوصات الدورية لفريق العمل بشكل مستمر ومتابعة أدائهم للمهام على أكمل وجه وتجنب الأخطاء المحتملة. شركة أمن تايكون جارد تضمن جودة مستمرة.",
    longDescription:
      "الجودة المستمرة هي أولويتنا. نراقب أداء فريقنا بانتظام ونقوم بفحوصات دورية شاملة. نظام المتابعة والإشراف المستمر يضمن أن كل فرد في فريقنا يؤدي مهامه على أكمل وجه.",
  },
]

const advantages = [
  {
    icon: Shield,
    title: "خبرة عسكرية",
    description: "فريق من الضباط السابقين من القوات المسلحة والشرطة",
  },
  {
    icon: Clock,
    title: "12+ عاماً من الخبرة",
    description: "خبرة واسعة في مجال الأمن والحراسة في مصر",
  },
  {
    icon: Award,
    title: "معايير عالمية",
    description: "نتبع أفضل المعايير والممارسات العالمية في الأمن",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "كوادر مدربة ومؤهلة على أعلى المستويات",
  },
]

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              لماذا تايكون جارد؟
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              أفضل شركة أمن وحراسة في مصر
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              تايكون جارد شركة أمن متخصصة تتميز بخبرة عسكرية وأمنية واسعة، أحدث التقنيات، وفريق محترف. اكتشف لماذا نحن الخيار الأمثل لاحتياجاتك الأمنية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              مميزات شركة أمن تايكون جارد
            </h2>
            <p className="text-lg text-muted-foreground">
              ما يجعلنا أفضل شركة أمن وحراسة في مصر
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                    <advantage.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Reasons */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                لماذا تختار شركة أمن تايكون جارد؟
              </h2>
              <p className="text-lg text-muted-foreground">
                أسباب تجعلنا الخيار الأمثل لاحتياجاتك الأمنية
              </p>
              <div className="h-1 w-24 bg-secondary mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-primary rounded-lg">
                        <reason.icon className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{reason.description}</p>
                    <details className="mt-4">
                      <summary className="cursor-pointer text-secondary font-semibold hover:text-secondary/80">
                        اقرأ المزيد
                      </summary>
                      <p className="text-muted-foreground leading-relaxed mt-2">{reason.longDescription}</p>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why We Stand Out */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                ما يميز شركة أمن تايكون جارد عن غيرها
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-foreground">خبرة عسكرية حقيقية:</strong> شركة أمن تايكون جارد تعتمد على فريق من الضباط السابقين من القوات المسلحة والشرطة، مما يضمن أعلى مستويات الكفاءة والانضباط.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-foreground">خبرة 12+ عاماً:</strong> أكثر من عقد من الخبرة في مجال الأمن والحراسة في مصر، مما جعلنا واحدة من أبرز شركات الأمن في المنطقة.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-foreground">تقنيات حديثة:</strong> نستثمر باستمرار في أحدث التقنيات الأمنية والتكنولوجيا لضمان حماية شاملة ومتطورة.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-foreground">خدمة 24/7:</strong> شركة أمن تايكون جارد متاحة على مدار الساعة طوال أيام الأسبوع لضمان حمايتك المستمرة.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-foreground">معايير عالمية:</strong> نتبع أفضل المعايير والممارسات العالمية في مجال الأمن والحراسة، مع الالتزام الكامل بقوانين وزارة الداخلية.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-lg p-8 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">اختر أفضل شركة أمن وحراسة في مصر</h3>
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

