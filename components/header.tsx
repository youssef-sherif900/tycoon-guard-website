"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Tycoon Guard Logo" width={75} height={75} className="rounded-full" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-secondary">تايكون جارد</h1>
              <p className="text-xs text-secondary/80">Security & Safety</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-primary-foreground hover:text-secondary transition-colors">
              الرئيسية
            </Link>
            <Link href="/about" className="text-primary-foreground hover:text-secondary transition-colors">
              من نحن
            </Link>
            <Link href="/services" className="text-primary-foreground hover:text-secondary transition-colors">
              خدماتنا
            </Link>
            <Link href="/why-us" className="text-primary-foreground hover:text-secondary transition-colors">
              لماذا نحن
            </Link>
            <Link href="#gallery" className="text-primary-foreground hover:text-secondary transition-colors">
              معرض الصور
            </Link>
            <Link href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">
              اتصل بنا
            </Link>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="default" size="sm" className="bg-secondary text-primary hover:bg-secondary/90">
              <a href="tel:01000006169" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>01000006169</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary bg-transparent"
            >
              <a
                href="https://wa.me/201008379046"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>واتساب</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary/20">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                الرئيسية
              </Link>
              <Link href="/about" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                من نحن
              </Link>
              <Link href="/services" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                خدماتنا
              </Link>
              <Link href="/why-us" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                لماذا نحن
              </Link>
              <Link href="#gallery" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                معرض الصور
              </Link>
              <Link href="#contact" className="text-primary-foreground hover:text-secondary transition-colors py-2">
                اتصل بنا
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                  <a href="tel:01000006169" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>01000006169</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-secondary text-secondary bg-transparent">
                  <a
                    href="https://wa.me/201008379046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>واتساب</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
