import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({ subsets: ["latin", "arabic"] })

export const metadata: Metadata = {
  title: "Tycoon Guard | شركة الأمن والحراسة الموثوق بها",
  description:
    "تايكون جارد لخدمات الأمن والحراسة وإدارة المشاريع. نقدم خدمات الأمن والحراسة على مدار 24/7 مع خبرة تتجاوز 12 عاماً.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
