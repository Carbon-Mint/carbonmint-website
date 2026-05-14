export default function Partners() {
  const partners = [
    'NABARD',
    'IIRR',
    'Bayer',
    'Mana Telangana',
    'Kattangur FPO'
  ];

  const clients = [
    'Kattangur FPCL',
    'Two Brothers',
    'DeHaat',
    'Organo'
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Our Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Partners & Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly collaborating with leading organizations across agriculture, sustainability, and rural development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Ecosystem Partners
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-center"
                >
                  <h4 className="text-lg font-bold text-gray-900">{partner}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Organizations We Work With
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-center"
                >
                  <h4 className="text-lg font-bold text-gray-900">{client}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
