import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "../lib/site";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: { default: "Baby's Maken | Catálogo de Vanitys", template: "%s | Baby's Maken" },
  description: "Descubre los 9 modelos de vanitys infantiles de Baby's Maken y consulta disponibilidad por WhatsApp.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: { default: "Baby's Maken | Catálogo de Vanitys", template: "%s | Baby's Maken" },
    description: "9 modelos de vanitys infantiles para crear espacios especiales.",
    type: "website",
    images: [{ url: "/images/catalogo.webp", width: 1080, height: 1080, alt: "Catálogo de Vanitys Baby's Maken" }]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Vanitys infantiles y muebles infantiles de Baby's Maken con entrega en Guadalajara, Tonalá y Zapopan.",
    areaServed: ["Guadalajara", "Tonalá", "Zapopan"],
    potentialAction: {
      "@type": "ContactAction",
      target: "https://wa.me/" + WHATSAPP_NUMBER,
      name: "Consultar disponibilidad por WhatsApp"
    }
  };
  return (
    <html lang="es-MX">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
