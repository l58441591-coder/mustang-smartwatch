import { createFileRoute } from '@tanstack/react-router'

import { AnnouncementBar, Header } from '@/components/store/header'
import { Hero } from '@/components/store/hero'
import { Gallery } from '@/components/store/gallery'
import { Features } from '@/components/store/features'
import { Specs } from '@/components/store/specs'
import { WhyChoose } from '@/components/store/why-choose'
import { Reviews } from '@/components/store/reviews'
import { OrderSection } from '@/components/store/order-section'
import { StickyBuy } from '@/components/store/sticky-buy'
import { Footer } from '@/components/store/footer'
import { useReveal } from '@/components/store/use-reveal'
import { photos, pricing } from '@/lib/product'

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mustang Limited Edition Smartwatch',
  brand: { '@type': 'Brand', name: 'GoBoult × Mustang' },
  description:
    'Racing-inspired smartwatch with a 2.01" 3D curved TFT display, functional rotating crown, 120+ sports modes, BT 5.3 calling, IP68 and up to 7 days of battery.',
  image: photos.map((p) => `/img/${p.file}`),
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: pricing.price,
    availability: 'https://schema.org/LimitedAvailability',
    url: '/#order',
  },
}

export const Route = createFileRoute('/')({
  head: () => ({
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(productJsonLd) }],
  }),
  component: Home,
})

function Home() {
  useReveal()
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Gallery />
        <Features />
        <Specs />
        <WhyChoose />
        <Reviews />
        <OrderSection />
      </main>
      <Footer />
      <StickyBuy />
    </>
  )
}
