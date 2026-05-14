export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CarbonMint",
    "url": "https://carbonmint.com",
    "logo": "https://carbonmint.com/carbonmint-logo.png",
    "description": "CarbonMint enables farmer organizations, agribusinesses, and sustainability partners to build profitable, climate-resilient agricultural ecosystems through technology, mechanization, traceability, and carbon programs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "AgHub, Professor Jayashankar Telangana Agricultural University (PJTAU)",
      "addressLocality": "Rajendra Nagar",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
      "postalCode": "500030"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@carbonmint.com"
    },
    "sameAs": [
      "https://www.facebook.com/carbonmint",
      "https://www.linkedin.com/company/carbonmint"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rice360™",
    "description": "Comprehensive platform designed to modernize the entire rice ecosystem — from farm inputs and climate-smart agronomy to mechanization, traceability, carbon credits, and rice husk processing.",
    "brand": {
      "@type": "Brand",
      "name": "CarbonMint"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Carbon Development & Agricultural Solutions",
    "provider": {
      "@type": "Organization",
      "name": "CarbonMint"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agricultural Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rice360™",
            "description": "End-to-End Transformation for the Rice Value Chain"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carbon Development",
            "description": "End-to-End Carbon Program Development & Execution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FPO Ecosystem Development",
            "description": "Strengthening Farmer Producer Organizations Through Technology & Services"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Rice360™?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rice360™ is a comprehensive platform designed to modernize the entire rice ecosystem — from farm inputs and climate-smart agronomy to mechanization, traceability, carbon credits, and rice husk processing. It helps farmers transition toward profitable, low-emission, globally competitive rice farming."
        }
      },
      {
        "@type": "Question",
        "name": "How does CarbonMint support carbon development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CarbonMint supports the complete lifecycle of agricultural carbon projects — from program design and implementation to monitoring, verification, and farmer benefit distribution. We help organizations unlock climate finance while ensuring farmers directly benefit from sustainability transitions."
        }
      },
      {
        "@type": "Question",
        "name": "What is Digital MRV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital MRV (Monitoring, Reporting, and Verification) is an advanced system for sustainability and carbon initiatives. It supports intervention monitoring, remote sensing, field validation, carbon outcome tracking, and evidence-based verification."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
