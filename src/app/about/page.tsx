import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      </main>
      <Footer />
    </div>
  );
}
