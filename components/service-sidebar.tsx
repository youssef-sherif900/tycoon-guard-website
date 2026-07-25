"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SEO_PAGES, type SEOPageData } from "@/lib/seo-data"
import { cn } from "@/lib/utils"
import {
  ChevronLeft,
  Shield,
  MapPin,
  Building2,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react"

const categories = [
  { id: "service" as const, name: "خدماتنا الأمنية", icon: Shield, description: "حلول أمن وحراسة متكاملة" },
  { id: "industry" as const, name: "أمن القطاعات", icon: Building2, description: "تأمين متخصص حسب طبيعة المنشأة" },
  { id: "location" as const, name: "مناطق التغطية", icon: MapPin, description: "تواجدنا في أهم المدن والمناطق" },
]

function GuideCard({
  page,
  isActive,
}: {
  page: SEOPageData
  isActive: boolean
}) {
  return (
    <Link
      href={`/${page.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300",
        isActive
          ? "border-secondary bg-secondary text-primary shadow-lg shadow-secondary/20"
          : "border-primary/10 bg-white hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      )}
    >
      <div>
        <h3
          className={cn(
            "text-base font-bold mb-2 leading-snug line-clamp-2",
            isActive ? "text-primary" : "text-primary group-hover:text-secondary"
          )}
        >
          {page.title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed line-clamp-2",
            isActive ? "text-primary/70" : "text-muted-foreground"
          )}
        >
          {page.description}
        </p>
      </div>
      <div
        className={cn(
          "mt-4 flex items-center gap-2 text-sm font-bold",
          isActive ? "text-primary" : "text-secondary"
        )}
      >
        <span>اعرف المزيد</span>
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      </div>
    </Link>
  )
}

type ServicesGuideProps = {
  /** When set, only show related pages (same category + a few others), excluding current */
  currentSlug?: string
  /** Compact mode for bottom of SEO pages */
  relatedOnly?: boolean
  showContact?: boolean
  className?: string
}

export function ServicesGuide({
  currentSlug,
  relatedOnly = false,
  showContact = true,
  className,
}: ServicesGuideProps) {
  const pathname = usePathname()

  const relatedPages = currentSlug
    ? (() => {
        const current = SEO_PAGES.find((p) => p.slug === currentSlug)
        if (!current) return SEO_PAGES.filter((p) => p.slug !== currentSlug).slice(0, 6)
        const sameCategory = SEO_PAGES.filter(
          (p) => p.category === current.category && p.slug !== currentSlug
        )
        const others = SEO_PAGES.filter(
          (p) => p.category !== current.category && p.slug !== currentSlug
        )
        return [...sameCategory, ...others].slice(0, 6)
      })()
    : []

  return (
    <section className={cn("w-full", className)}>
      <div className="mb-10 text-right">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          {relatedOnly ? "صفحات ذات صلة" : "دليل الخدمات والمناطق"}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl ml-auto ml-0">
          {relatedOnly
            ? "استكشف المزيد من خدماتنا ومناطق تغطيتنا لتعزيز أمان منشأتك."
            : "تصفح خدماتنا الأمنية، أمن القطاعات، ومناطق التغطية في مصر — كل صفحة مصممة لمساعدتك في اختيار الحل المناسب."}
        </p>
        <div className="h-1 w-20 bg-secondary mt-4 mr-0" />
      </div>

      {relatedOnly && relatedPages.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {relatedPages.map((page) => (
            <GuideCard
              key={page.slug}
              page={page}
              isActive={pathname === `/${page.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-14">
          {categories.map((cat) => {
            const pages = SEO_PAGES.filter((p) => p.category === cat.id)
            if (pages.length === 0) return null

            return (
              <div key={cat.id}>
                <div className="flex items-center gap-3 mb-6 justify-end flex-row-reverse sm:flex-row-reverse sm:justify-end mr-4">
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-foreground">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-primary shrink-0">
                    <cat.icon className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pages.map((page) => (
                    <GuideCard
                      key={page.slug}
                      page={page}
                      isActive={pathname === `/${page.slug}`}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {pathname !== "/services" && (
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:underline"
          >
            {relatedOnly ? "عرض كل الخدمات والمناطق" : "العودة لصفحة الخدمات"}
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>
      )}

      {showContact && (
        <div className="mt-12 bg-secondary rounded-3xl p-8 md:p-10 text-primary relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 text-right">
            <div>
              <h3 className="text-2xl font-bold mb-2">تحتاج مساعدة؟</h3>
              <p className="opacity-80 leading-relaxed max-w-md">
                خبرائنا متاحون الآن لتصميم خطة أمنية مخصصة لمنشأتك في أي منطقة في مصر.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:01000006169"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span className="font-bold">01000006169</span>
              </a>
              <a
                href="https://wa.me/201008379046"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-2xl hover:bg-[#20bd5c] transition-all shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="font-bold">واتساب مباشر</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/** @deprecated Use ServicesGuide — kept for compatibility */
export function ServiceSidebar() {
  return <ServicesGuide />
}
