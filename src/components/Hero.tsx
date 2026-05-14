'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                🌱 Sustainable Agriculture Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Driving <span className="text-green-700">Sustainable</span> Farming Innovation
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Empower farmers to transition to resource-efficient regenerative agricultural 
              practices with the aim of making societal and environmental impact by fostering 
              thriving rural communities, and improving soil health and reduce resource usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Talk to Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-green-700"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">500+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">10K+</div>
                <div className="text-sm text-gray-600">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">30%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                    <svg className="w-16 h-16 text-green-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-bold text-gray-900">Digital MRV</h3>
                    <p className="text-sm text-gray-600 mt-2">Blockchain Verified</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                    <svg className="w-16 h-16 text-blue-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="font-bold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600 mt-2">Real-time Insights</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                    <svg className="w-16 h-16 text-emerald-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-bold text-gray-900">Carbon Credits</h3>
                    <p className="text-sm text-gray-600 mt-2">Earn Rewards</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                    <svg className="w-16 h-16 text-yellow-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h3 className="font-bold text-gray-900">Community</h3>
                    <p className="text-sm text-gray-600 mt-2">Network Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
