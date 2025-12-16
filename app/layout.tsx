import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({ subsets: ["latin", "arabic"], display: "swap" })

export const metadata: Metadata = {
  // Core
  title: {
    default: "تايكون جارد | شركة الأمن والحراسة وإدارة المشاريع",
    template: "%s | تايكون جارد للأمن والحراسة",
  },
  description:
    "تايكون جارد شركة متخصصة في خدمات الأمن والحراسة وإدارة المشاريع في مصر. حراسة المنشآت، الأنظمة الأمنية، وتأمين الفعاليات بخبرة تتجاوز 12 عاماً وعلى مدار 24/7.",
  metadataBase: new URL("https://tycoon-guard.com"),

  // SEO
  keywords: [
    "تايكون جارد",
    "شركة أمن",
    "شركة حراسة",
    "شركات حراسة في مصر",
    "شركات أمن في القاهرة",
    "تأمين منشآت",
    "خدمات أمن وحراسة",
    "security company egypt",
    "security guard services",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Social
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://tycoon-guard.com/",
    siteName: "تايكون جارد للأمن والحراسة",
    title: "تايكون جارد | شركة الأمن والحراسة الموثوق بها في مصر",
    description:
      "حلول أمن وحراسة متكاملة للمنشآت الحكومية والخاصة مع فريق ذو خبرة عسكرية وأمنية لأكثر من 12 عاماً.",
    images: [
      {
        url: "/security-guards-professional-team.jpg",
        width: 1200,
        height: 630,
        alt: "تايكون جارد - فريق الأمن والحراسة المحترف",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تايكون جارد | شركة الأمن والحراسة الموثوق بها في مصر",
    description:
      "خدمات أمن وحراسة متكاملة للمنشآت الحكومية والخاصة والفعاليات مع فريق محترف وخبرة تتجاوز 12 عاماً.",
    images: ["/security-guards-professional-team.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "تايكون جارد للأمن والحراسة وإدارة المشاريع",
    url: "https://tycoon-guard.com/",
    telephone: "+201000006169",
    email: "info@tycoonguard.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "القاهرة",
      streetAddress: "الإسكندرية - برج العرب - الساحل الشمالى - القاهرة",
    },
    areaServed: "Egypt",
    description:
      "شركة تايكون جارد متخصصة في خدمات الأمن والحراسة وإدارة المشاريع وحلول المراقبة بالكاميرات على مدار الساعة.",
    sameAs: ["https://tycoon-guard.com/"],
  }

  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
