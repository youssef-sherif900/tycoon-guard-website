import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <WhyUs />
      <Services />
      <CTA />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
