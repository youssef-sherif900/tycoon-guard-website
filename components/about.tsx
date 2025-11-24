import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "تراكم الخبرة",
    description:
      "وذلك بفضل وجود نخبة من الضباط السابقين من القوات المسلحة والشرطة الذين لديهم خبرة في المجال الأمني والمعروفين بكفاءتهم",
    image: "/military-officers-security.jpg",
  },
  {
    icon: TrendingUp,
    title: "النمط الإداري",
    description:
      "يتميز الأسلوب الإداري في تايكون جارد بعناصر مهمة جداً في العملية الإدارية والتي تشمل اتباع المنهج العلمي، والأسلوب الحديث في الإدارة، والخبرة الواسعة التي تمتلكها الإدارة",
    image: "/modern-management-office.jpg",
  },
  {
    icon: Users,
    title: "كفاءة العنصر البشري",
    description:
      "نظراً لأهمية الدور الذي يقوم به الفرد والمهام المطلوبة منه، فإننا نقوم باختيار الأفراد بعناية فائقة ووفقاً لمجموعة من المعايير التي نتبعها",
    image: "/professional-security-team.jpg",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary text-lg mb-2">لماذا نحن؟</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">الذي نتميز به</h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20">
              <div className="relative h-48 bg-primary/5">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                <feature.icon className="absolute bottom-4 right-4 h-12 w-12 text-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
