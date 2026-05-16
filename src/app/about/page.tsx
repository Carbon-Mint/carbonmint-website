import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
              About Us
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                CarbonMint is at the forefront of driving sustainable farming innovation. 
                We empower farmers to transition to resource-efficient regenerative agricultural 
                practices with the aim of making societal and environmental impact.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our mission is to foster thriving rural communities while improving soil health 
                and reducing resource usage through cutting-edge digital solutions and partnerships.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Through our comprehensive platform, we provide farmers with the tools, knowledge, 
                and support they need to implement sustainable practices that benefit both their 
                livelihoods and the environment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Vision
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the leading platform for sustainable agriculture transformation, 
                creating measurable environmental impact while ensuring farmer prosperity 
                and food security for future generations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Meet The Team
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Co-Founders */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/prasanna.jpg"
                      alt="Prasanna Kondapaneni"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prasanna Kondapaneni</h3>
                  <p className="text-green-700 font-semibold mb-3">Co-Founder</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/venkat.jpg"
                      alt="Venkat Pindipolu"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Venkat Pindipolu</h3>
                  <p className="text-green-700 font-semibold mb-3">Co-Founder</p>
                </div>

                {/* Partner */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/vijay.jpg"
                      alt="Vijay Tandra Sistla"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vijay Tandra Sistla</h3>
                  <p className="text-blue-700 font-semibold mb-3">Partner</p>
                </div>

                {/* Advisors */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/chintala.jpg"
                      alt="Dr. G. R. Chintala"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. G. R. Chintala</h3>
                  <p className="text-purple-700 font-semibold mb-3">Advisor</p>
                  <p className="text-sm text-gray-600">Former Chairman - NABARD</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/praveen-rao.jpg"
                      alt="Dr. V. Praveen Rao"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. V. Praveen Rao</h3>
                  <p className="text-purple-700 font-semibold mb-3">Advisor</p>
                  <p className="text-sm text-gray-600">VC - Kaveri University</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/vijaya-bhaskar.jpg"
                      alt="Prof. Vijaya Bhaskar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. Vijaya Bhaskar</h3>
                  <p className="text-purple-700 font-semibold mb-3">Advisor</p>
                  <p className="text-sm text-gray-600">Dean IIM Vizag</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/team/biradar.jpg"
                      alt="Dr. Chandrasekhar Biradar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Chandrasekhar Biradar</h3>
                  <p className="text-purple-700 font-semibold mb-3">Advisor</p>
                  <p className="text-sm text-gray-600">CMD Global Green Growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
