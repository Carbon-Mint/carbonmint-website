export default function Features() {
  const features = [
    {
      title: 'Hyperlocal Package of Practices (PoP)',
      description: 'Ready-to-deploy climate-smart agronomy frameworks tailored for local farming conditions and desired sustainability outcomes.',
      details: [
        'Crop-specific recommendations',
        'Climate-smart interventions',
        'Regenerative agriculture practices',
        'Resource optimization strategies'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'AgriOS™ Farm Management',
      description: 'A comprehensive digital farm management system for managing farmers, land parcels, crops, resources, and field operations.',
      details: [
        'Farmer onboarding',
        'Land mapping',
        'Crop lifecycle management',
        'Resource tracking',
        'Operational monitoring',
        'Data-driven decision support'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Mobile & Web Applications',
      description: 'Simple yet powerful mobile and web platforms designed for field officers, FPOs, and farmers.',
      details: [
        'Farm activity tracking',
        'Real-time data capture',
        'Evidence collection',
        'Field monitoring',
        'Workflow management'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Traceability',
      description: 'Create transparent and trusted agricultural supply chains with end-to-end traceability systems.',
      details: [
        'Farmer journey',
        'Land records',
        'Crop lifecycle data',
        'Sustainability practices',
        'Evidence for auditors and buyers'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-teal-400 to-cyan-500',
    },
    {
      title: 'Digital MRV for Carbon Projects',
      description: 'Advanced Monitoring, Reporting, and Verification (MRV) systems for sustainability and carbon initiatives.',
      details: [
        'Intervention monitoring',
        'Remote sensing',
        'Field validation',
        'Carbon outcome tracking',
        'Evidence-based verification'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const benefits = [
    {
      title: 'Improved Farmer Outcomes',
      description: 'Through mechanization, agriculture and reduced resource usage, farmers can save cost of cultivation',
    },
    {
      title: 'Environmental and Societal Impact',
      description: 'Stakeholders can drive measurable and sustainable drive changes to climate, improve soil health, reduce resource usage and empower rural communities',
    },
    {
      title: 'Incentivization',
      description: 'Through market linkage farmers/producers can earn food tokens, higher incomes and carbon incentives for practicing responsible farming',
    },
  ];

  return (
    <>
      <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Platform Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and technologies to transform agricultural practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color} rounded-t-2xl`}></div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-green-200 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Benefits
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Measurable impact for farmers, communities, and the environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center bg-green-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl hover:bg-opacity-70 transition-all duration-300 border border-green-400 border-opacity-30 shadow-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 bg-opacity-40 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
