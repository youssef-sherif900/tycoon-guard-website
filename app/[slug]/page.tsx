import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SEO_PAGES } from "@/lib/seo-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceSidebar } from "@/components/service-sidebar"
import { CTA } from "@/components/cta"
import { Phone, CheckCircle2, ShieldCheck, Clock, MapPin, Zap } from "lucide-react"
import Image from "next/image"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SEO_PAGES.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = SEO_PAGES.find((p) => p.slug === slug)

  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      images: ["/guard-images/professional-security-team.jpg"],
    },
  }
}

export default async function SEOServicePage({ params }: PageProps) {
  const { slug } = await params
  const page = SEO_PAGES.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/guard-images/professional-security-team.jpg"
            alt={page.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-right">
            <nav className="flex items-center justify-start gap-2 text-secondary/80 mb-6 text-sm flex-row-reverse">
              <a href="/" className="hover:text-secondary">الرئيسية</a>
              <span>/</span>
              <span className="text-secondary">{page.title}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {page.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Content Column */}
          <div className="flex-1 space-y-12 order-1 lg:order-2">
            <div className="prose prose-invert prose-lg max-w-none text-right">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3 justify-end flex-row-reverse">
                لماذا تختار تايكون جارد لخدمات {page.title}؟
                <ShieldCheck className="text-secondary h-8 w-8" />
              </h2>
              <div className="space-y-6 mb-8 text-right">
                {page.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 text-lg leading-loose">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {page.features && (
                <div className="grid md:grid-cols-2 gap-6 my-12">
                  {page.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-secondary/30 transition-all group">
                      <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
                        <Zap className="h-5 w-5 text-secondary group-hover:text-primary" />
                      </div>
                      <span className="font-bold text-primary text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-bold text-primary mt-12 mb-6">
                التزامنا في {page.title}
              </h3>
              <p className="text-gray-600 leading-loose">
                نحن في تايكون جارد نؤمن بأن الأمن ليس مجرد تواجد مادي، بل هو منظومة متكاملة من التخطيط والتنفيذ.
                عندما تختارنا لخدمات <strong>{page.title}</strong>، فإنك تحصل على دراسة أمنية دقيقة لمنشأتك،
                وتحديد نقاط الضعف والقوة، وتوفير الكوادر البشرية والوسائل التقنية التي تضمن لك الحماية القصوى والهدوء التام.
              </p>

              {/* Call to Action Box */}
              <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden my-16 shadow-2xl shadow-primary/30">
                <div className="relative z-10 text-right">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">
                    جاهز لتأمين منشأتك بأعلى المعايير؟
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    تواصل معنا اليوم للحصول على استشارة أمنية مجانية ومعاينة ميدانية دقيقة لموقعك من قبل خبرائنا.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-start flex-row-reverse">
                    <a
                      href="tel:01000006169"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl shadow-secondary/20"
                    >
                      <Phone className="h-5 w-5" />
                      اتصل بنا: 01000006169
                    </a>
                  </div>
                </div>
                <ShieldCheck className="absolute -bottom-10 -right-10 h-64 w-64 text-white/5 rotate-12" />
              </div>
            </div>

            {/* Additional Info / Areas */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-primary text-xl mb-2">متاح 24/7</h4>
                <p className="text-sm text-gray-500">نحن متواجدون دائماً لحمايتكم وتقديم الدعم الفني الفوري.</p>
              </div>
              <div className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-primary text-xl mb-2">تغطية شاملة</h4>
                <p className="text-sm text-gray-500">نغطي كافة محافظات مصر والمناطق الصناعية واللوجستية.</p>
              </div>
              <div className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
                <ShieldCheck className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-primary text-xl mb-2">موثوقية تامة</h4>
                <p className="text-sm text-gray-500">خبرة عسكرية وأمنية تتجاوز 12 عاماً في تأمين كبرى المشاريع.</p>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-80 order-2 lg:order-1">
            <ServiceSidebar />
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
