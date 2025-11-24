import { Card, CardContent } from "@/components/ui/card"
import { Target, Settings, Zap, Monitor, MessageSquare, Eye } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "تخطيط استراتيجي",
    description:
      "إجراء دراسة كاملة للموقع ومعرفة ما يحتاجه وما تحتاجه المنشأة التي تقدم لها الخدمات من قبل الشركة سواء من الأفراد والمعدات اللازمة",
  },
  {
    icon: Settings,
    title: "تصميم و تنفيذ",
    description:
      "تشمل خدمات الأجهزة الإلكترونية والوسائل التكنولوجية الحاصلة على ترخيص من الهيئة القومية للاتصالات لحراسة العمل ووضع خطة لإدارة المخاطر والتدخل السريع",
  },
  {
    icon: Zap,
    title: "سرعة الاستجابة",
    description: "التدخل السريع في حالات الطوارئ، وإذا كان العميل يحتاج إلينا، فهذا يضمن أننا موجودون دائمًا من أجله",
  },
  {
    icon: Monitor,
    title: "أحدث التقنيات والمعدات",
    description:
      "الجانب التكنولوجي لا يقل أهمية عن الموارد البشرية حيث نعتمد على أحدث الأجهزة والمعدات المستخدمة في عملية التأمين والحالات المشبوهة",
  },
  {
    icon: MessageSquare,
    title: "الاستشارات الأمنية",
    description:
      "نقدم استشارات أمنية مبنية على دراسات علمية معمقة ونظرة أمنية مع الخبرة الواسعة التي نمتلكها بفضل كوادر ذات خبرة عالية",
  },
  {
    icon: Eye,
    title: "المتابعة والإشراف المستمر",
    description:
      "نقوم بإجراء الفحوصات الدورية لفريق العمل بشكل مستمر ومتابعة أدائهم للمهام على أكمل وجه وتجنب الأخطاء المحتملة",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
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
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
