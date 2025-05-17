import HeroSection from "@/components/hero-section";
import RoomCard from "@/components/room-card";
import LocationMap from "@/components/location-map";
import Facilities from "@/components/facilities";
import Testimonials from "@/components/testimonials";
import SeoContent from "@/components/seo-content";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import AoriFooter from "@/components/aori-footer";
import { createClient } from "../../supabase/server";
import Script from "next/script";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Room data
  const rooms = [
    {
      title: "Kamar Deluxe AC",
      price: "Rp 280.000",
      description: "Kamar double bed / twin dengan semua fasilitas dasar + AC",
      features: ["Max 3 Orang", "WiFi Gratis", "AC", "Kamar Mandi Dalam"],
      imageUrl:
        "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159780/IMG-20250424-WA0026_pfelsz.jpg",
    },
    {
      title: "Kamar Deluxe non AC",
      price: "Rp 230.000",
      description: "Kamar double bed / twin dengan semua fasilitas dasar",
      features: ["Max 3 Orang", "WiFi Gratis", "Fan", "Kamar Mandi Dalam"],
      imageUrl:
        "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0022_dlv5d7.jpg",
    },
    {
      title: "Kamar Single Standard",
      price: "Rp 150.000",
      description: "Kamar khusus untuk 1 orang dengan semua fasilitas dasar",
      features: ["Max 1 Orang", "WiFi Gratis", "Fan", "Kamar Mandi Dalam"],
      imageUrl:
        "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1741798142/IMG-20240630-WA0033_tgezls.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured data for SEO */}
      <Script
        id="hotel-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "AORI Guest House Malang",
            description:
              "Penginapan Syariah dengan lokasi strategis dekat Universitas Brawijaya Malang. Kamar nyaman, bersih, dan terjangkau.",
            url: "https://aoriguesthouse.com",
            telephone: "+6281234567890",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Sigura-gura VI no 22",
              addressLocality: "Malang",
              addressRegion: "Jawa Timur",
              postalCode: "65145",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -7.953423,
              longitude: 112.613605,
            },
            starRating: {
              "@type": "Rating",
              ratingValue: "4.8",
            },
            priceRange: "Rp 150.000 - Rp 300.000",
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "WiFi Gratis" },
              {
                "@type": "LocationFeatureSpecification",
                name: "AC",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Kamar Mandi Dalam",
              },
              { "@type": "LocationFeatureSpecification", name: "Musholla" },
              { "@type": "LocationFeatureSpecification", name: "Parkir" },
              {
                "@type": "LocationFeatureSpecification",
                name: "Dekat Universitas Brawijaya",
              },
            ],
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "150000",
              highPrice: "298000",
              priceCurrency: "IDR",
              offers: [
                {
                  "@type": "Offer",
                  name: "Kamar Single",
                  price: "150000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Kamar Deluxe Non AC",
                  price: "230000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Kamar Double AC",
                  price: "280000",
                  priceCurrency: "IDR",
                  availability: "https://schema.org/InStock",
                },
              ],
            },
            image: [
              "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
              "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
            ],
            sameAs: [
              "https://www.facebook.com/aoriguesthouse",
              "https://www.instagram.com/aoriguesthouse",
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Rooms Section */}
      <section id="rooms" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pilihan Kamar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai kamar nyaman, bersih, dan terjangkau kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                title={room.title}
                price={room.price}
                description={room.description}
                features={room.features}
                imageUrl={room.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Fasilitas Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk kenyamanan menginap
            </p>
          </div>
          <Facilities />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lokasi Strategis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berlokasi strategis dekat Universitas Brawijaya dan tempat wisata
              Malang lainnya
            </p>
          </div>

          <LocationMap />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Testimoni Tamu Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dengarkan pengalaman dari tamu-tamu yang puas
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 bg-white">
        <FaqSection />
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* SEO Content Section */}
      <SeoContent />

      {/* Footer */}
      <AoriFooter />
    </div>
  );
}
