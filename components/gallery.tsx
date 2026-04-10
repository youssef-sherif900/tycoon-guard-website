import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const images = [
  "/guard-images/guard-camera-2.jpeg",
  "/guard-images/guard-mall.jpeg",
  "/guard-images/guard-play-yard.jpeg",
  "/guard-images/guard-storage.jpeg",
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">معرض الصور</h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-secondary text-xl font-bold">تايكون جارد</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <a href="tel:01000006169" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              شاهد المزيد
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
