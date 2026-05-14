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

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-3">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                🌱 Climate-Smart Agriculture Platform
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Building the Future of <span className="text-green-700">Climate-Smart</span> Agriculture
            </h1>
            <p className="text-lg text-gray-700 mb-3 leading-relaxed font-semibold">
              From Rice Traceability to Carbon Credits — Empowering Farmers at Scale
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              CarbonMint enables farmer organizations, agribusinesses, and sustainability partners to build profitable, climate-resilient agricultural ecosystems through technology, mechanization, traceability, and carbon programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-green-700"
              >
                Partner With Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-xs text-gray-600">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">10K+</div>
                <div className="text-xs text-gray-600">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">30%</div>
                <div className="text-xs text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GH7-TAQpW9g"
                title="CarbonMint Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
