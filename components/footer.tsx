import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Phone, MessageCircle, Mail } from "lucide-react"
import { SEO_PAGES } from "@/lib/seo-data"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.jpg" alt="Tycoon Guard Logo" width={60} height={60} className="rounded-full border-2 border-secondary" />
              <div>
                <h3 className="text-xl font-bold text-secondary">تايكون جارد</h3>
                <p className="text-sm text-primary-foreground/80">Security & Safety</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              تايكون جارد - شركة أمن وحراسة رائدة في مصر بخبرة تتجاوز 12 عاماً. نقدم خدمات أمنية متكاملة وإدارة مشاريع وحلول نظافة احترافية على مدار الساعة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4 border-r-2 border-secondary pr-3">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  لماذا نحن
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4 border-r-2 border-secondary pr-3">خدمات متميزة</h4>
            <ul className="space-y-3">
              {SEO_PAGES.slice(0, 5).map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4 border-r-2 border-secondary pr-3">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01000006169"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors font-mono"
                >
                  <Phone className="h-4 w-4" />
                  <span>01000006169</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201008379046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors font-mono"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>01008379046</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tycoonguard.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@tycoonguard.com</span>
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors hover:scale-110 transform transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors hover:scale-110 transform transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors hover:scale-110 transform transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors hover:scale-110 transform transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO Tag Cloud */}
        <div className="mt-16 pt-12 border-t border-secondary/10">
          <h4 className="text-sm font-bold text-secondary/60 mb-6 text-center uppercase tracking-widest">المناطق والخدمات</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SEO_PAGES.map((page) => (
              <Link 
                key={page.slug} 
                href={`/${page.slug}`}
                className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} تايكون جارد للأمن والحراسة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link href="/sitemap" className="text-xs text-primary-foreground/40 hover:text-secondary">خريطة الموقع</Link>
            <Link href="/privacy" className="text-xs text-primary-foreground/40 hover:text-secondary">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
