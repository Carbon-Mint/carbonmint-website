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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://carbonmint.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://carbonmint.com#solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Features",
        "item": "https://carbonmint.com#features"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://carbonmint.com#carbon-project"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "About",
        "item": "https://carbonmint.com/about"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://carbonmint.com#contact"
      }
    ]
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
      },
      {
        "@type": "Question",
        "name": "What is climate-smart agriculture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Climate-smart agriculture is an approach that helps farmers increase productivity, adapt to climate change, and reduce greenhouse gas emissions. CarbonMint implements climate-smart practices like Alternate Wetting and Drying (AWD) in rice cultivation, which reduces methane emissions while maintaining or improving yields."
        }
      },
      {
        "@type": "Question",
        "name": "How does CarbonMint help Farmer Producer Organizations (FPOs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CarbonMint strengthens FPOs through technology platforms, market linkages, mechanization services, and access to carbon finance. We provide end-to-end support including digital farm management, traceability systems, and carbon program implementation to help FPOs become sustainable, profitable enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Verra VM0051 methodology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verra VM0051 is a verified carbon standard methodology for reducing methane emissions from rice cultivation through Alternate Wetting and Drying (AWD) practices. CarbonMint implements AWD interventions under this methodology in Telangana and Andhra Pradesh, helping farmers earn carbon credits while reducing water usage and emissions."
        }
      },
      {
        "@type": "Question",
        "name": "How can farmers earn carbon credits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Farmers can earn carbon credits by adopting climate-smart practices like AWD in rice cultivation. CarbonMint handles the entire process: implementing the practices, monitoring through Digital MRV, verification, and ensuring farmers receive direct benefits from carbon credit sales."
        }
      },
      {
        "@type": "Question",
        "name": "What services does CarbonMint provide to agribusinesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CarbonMint provides agribusinesses with traceability solutions, sustainability program implementation, carbon project development, digital farm management platforms, and market linkage services. We help companies build climate-resilient supply chains and meet sustainability commitments."
        }
      },
      {
        "@type": "Question",
        "name": "Where does CarbonMint operate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CarbonMint primarily operates in India, with active projects in Telangana and Andhra Pradesh. Our headquarters is at AgHub, Professor Jayashankar Telangana Agricultural University (PJTAU), Rajendra Nagar, Hyderabad, Telangana."
        }
      },
      {
        "@type": "Question",
        "name": "What is rice traceability and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rice traceability is the ability to track rice from farm to consumer, documenting every step including cultivation practices, processing, and distribution. It's important for food safety, quality assurance, sustainability verification, and enabling premium markets for climate-smart rice. CarbonMint's Rice360™ platform provides end-to-end traceability."
        }
      },
      {
        "@type": "Question",
        "name": "How does CarbonMint use technology in agriculture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CarbonMint uses digital platforms for farm management, remote sensing for monitoring, mobile apps for farmer engagement, IoT sensors for data collection, and blockchain for traceability. Our Digital MRV system combines satellite imagery, field validation, and data analytics to track sustainability outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What is Alternate Wetting and Drying (AWD)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AWD is a water management technique in rice cultivation where fields are alternately flooded and dried instead of being continuously flooded. This reduces methane emissions by up to 50%, saves water by 15-30%, and can maintain or improve yields. CarbonMint implements AWD as part of carbon projects under Verra VM0051."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
