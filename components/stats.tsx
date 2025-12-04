import { Building2, Award, Users, Briefcase, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "@/components/CountUp"

const stats = [
  { icon: Building2, label: "المحافظات", value: "27+" },
  { icon: Award, label: "سنين الخبرة", value: "12+" },
  { icon: Users, label: "العملاء", value: "500+" },
  { icon: Briefcase, label: "قوة العمل", value: "1000+" },
  { icon: Target, label: "المشاريع", value: "120+" },
]

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-secondary">أرقام تتحدث عنا</h2>
        <div className="h-1 w-24 bg-secondary mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/5 border-secondary/20 hover:border-secondary/50 transition-all"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CountUp className="text-4xl font-bold text-secondary mb-2" to={stat.value} from={0} duration={1} separator="," direction="up" /> 
                <div className="text-primary-foreground/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
