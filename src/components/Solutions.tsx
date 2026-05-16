export default function Solutions() {
  const solutions = [
    {
      title: 'Rice360™',
      subtitle: 'End-to-End Transformation for the Rice Value Chain',
      description: 'Rice360™ is a comprehensive platform designed to modernize the entire rice ecosystem — from farm inputs and climate-smart agronomy to mechanization, traceability, carbon credits, and rice husk processing.',
      features: [
        'Climate-smart rice cultivation',
        'Mechanization support for farmers',
        'Digital farm management',
        'Paddy traceability across the value chain',
        'Carbon credit integration',
        'Sustainable rice production systems',
        'Rice husk utilization and processing'
      ],
      tagline: 'Rice360™ helps farmers transition toward profitable, low-emission, globally competitive rice farming.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Carbon Development',
      subtitle: 'End-to-End Carbon Program Development & Execution',
      description: 'CarbonMint supports the complete lifecycle of agricultural carbon projects — from program design and implementation to monitoring, verification, and farmer benefit distribution.',
      features: [
        'Methane emission reduction projects',
        'Biochar programs',
        'Agroforestry initiatives',
        'Digital MRV systems',
        'Carbon credit generation',
        'Farmer incentive distribution'
      ],
      tagline: 'We help organizations unlock climate finance while ensuring farmers directly benefit from sustainability transitions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-600',
    },
    {
      title: 'FPO Ecosystem Development',
      subtitle: 'Strengthening Farmer Producer Organizations Through Technology & Services',
      description: 'CarbonMint works closely with FPOs and federations to improve operational efficiency, farmer engagement, and financial outcomes.',
      features: [
        'Farmer collectivization',
        'Input management systems',
        'Mechanization service management',
        'Digital operations platforms',
        'Crop planning and advisory',
        'Sustainability program integration'
      ],
      tagline: 'Our solutions enable FPOs to become scalable, resilient, and farmer-centric rural enterprises.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-indigo-600',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Carbon & Agricultural Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive end-to-end solutions for sustainable agriculture transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-sm font-semibold text-green-700 mb-4">
                  {solution.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">What {solution.title} Enables:</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-sm italic text-gray-700 border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded">
                  {solution.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
