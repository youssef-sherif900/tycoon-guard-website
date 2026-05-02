"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SEO_PAGES } from "@/lib/seo-data"
import { cn } from "@/lib/utils"
import { ChevronLeft, Shield, MapPin, Building2, Phone, MessageCircle } from "lucide-react"

export function ServiceSidebar() {
  const pathname = usePathname()

  const categories = [
    { id: "service", name: "خدماتنا الأمنية", icon: Shield },
    { id: "industry", name: "أمن القطاعات", icon: Building2 },
    { id: "location", name: "مناطق التغطية", icon: MapPin },
  ]

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        <div className="bg-primary p-6 rounded-3xl border border-secondary/20 shadow-2xl shadow-black/40 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          
          <h3 className="text-xl font-bold text-secondary mb-8 border-r-4 border-secondary pr-4 relative z-10">
            دليل الخدمات والمناطق
          </h3>

          <div className="space-y-8 relative z-10">
            {categories.map((cat) => {
              const pages = SEO_PAGES.filter(p => p.category === cat.id)
              if (pages.length === 0) return null

              return (
                <div key={cat.id} className="space-y-3">
                  <div className="flex items-center gap-2 text-secondary/60 text-xs font-bold uppercase tracking-widest mb-4">
                    <cat.icon className="h-4 w-4" />
                    <span>{cat.name}</span>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {pages.map((page) => {
                      const isActive = pathname === `/${page.slug}`
                      return (
                        <Link
                          key={page.slug}
                          href={`/${page.slug}`}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-xl transition-all duration-300 group text-sm",
                            isActive 
                              ? "bg-secondary text-primary font-bold shadow-lg shadow-secondary/20 translate-x-1" 
                              : "text-primary-foreground/70 hover:bg-white/5 hover:text-secondary"
                          )}
                        >
                          <span className="line-clamp-1">{page.title}</span>
                          <ChevronLeft className={cn(
                            "h-3 w-3 transition-transform duration-300",
                            isActive ? "rotate-90 text-primary" : "group-hover:-translate-x-1 opacity-50"
                          )} />
                        </Link>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </div>
        </div>

        {/* Premium Contact Card */}
        <div className="bg-secondary p-8 rounded-3xl text-primary shadow-2xl shadow-secondary/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 group-hover:h-full transition-all duration-500 pointer-events-none opacity-20" />
          <h4 className="text-xl font-bold mb-2 relative z-10">تحتاج مساعدة؟</h4>
          <p className="text-sm mb-6 opacity-80 leading-relaxed relative z-10">
            خبرائنا متاحون الآن لتصميم خطة أمنية مخصصة لمنشأتك.
          </p>
          <div className="space-y-3 relative z-10">
            <a 
              href="tel:01000006169" 
              className="flex items-center justify-center gap-3 p-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold">01000006169</span>
            </a>
            <a 
              href="https://wa.me/201008379046" 
              target="_blank"
              className="flex items-center justify-center gap-3 p-4 bg-[#25D366] text-white rounded-2xl hover:bg-[#20bd5c] transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-bold">واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
