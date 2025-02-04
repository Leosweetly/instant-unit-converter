export const metadata = {
  title: "Instant Unit Converter | Convert Length, Weight, Volume & More",
  description: "Convert length, weight, temperature, and more with this instant, user-friendly unit converter.",
  keywords: [
    "unit converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "metric to imperial",
    "online calculator",
    "convert units"
  ],
  openGraph: {
    title: "Instant Unit Converter - Fast & Accurate Conversions",
    description: "Convert length, weight, temperature, and more instantly with our beautifully designed unit converter.",
    url: "https://instantunitconverter.com",
    type: "website",
    images: [
      {
        url: "https://instantunitconverter.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instant Unit Converter Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Unit Converter - Convert Any Unit Instantly",
    description: "The fastest and most accurate unit converter for length, weight, volume, temperature, and more.",
    images: ["https://instantunitconverter.com/og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Instant Unit Converter",
              "url": "https://instantunitconverter.com",
              "description": "Convert length, weight, temperature, and more with this instant, user-friendly unit converter.",
              "image": "https://instantunitconverter.com/og-image.jpg",
              "publisher": {
                "@type": "Organization",
                "name": "Instant Unit Converter",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://instantunitconverter.com/logo.png"
                }
              },
              "mainEntity": {
                "@type": "Calculator",
                "name": "Unit Converter",
                "url": "https://instantunitconverter.com",
                "about": "Online calculator for converting length, weight, temperature, and more."
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}