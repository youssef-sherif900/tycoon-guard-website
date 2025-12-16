import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Phone, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.jpg" alt="Tycoon Guard Logo" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-secondary">تايكون جارد</h3>
                <p className="text-sm text-primary-foreground/80">Security & Safety</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              تايكون جارد - شركة أمن وحراسة رائدة في مصر بخبرة تتجاوز 12 عاماً. نقدم خدمات أمنية متكاملة على مدار الساعة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">روابط سريعة</h4>
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
            <h4 className="text-lg font-bold text-secondary mb-4">خدماتنا</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">أمن وحراسة 24/7</li>
              <li className="text-primary-foreground/80">إدارة المشاريع</li>
              <li className="text-primary-foreground/80">كاميرات المراقبة</li>
              <li className="text-primary-foreground/80">الاستشارات الأمنية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01000006169"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
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
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
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
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">© {new Date().getFullYear()} تايكون جارد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
