import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'NABARD', logo: '/partners/nabard.png' },
    { name: 'IIRR', logo: '/partners/iirr.png' },
    { name: 'Bayer', logo: '/partners/bayer.png' },
    { name: 'Mana Telangana', logo: '/partners/mana-telangana.png' },
    { name: 'Kattangur FPO', logo: '/partners/kattangur-fpo.png' },
    { name: 'Department of Agriculture (Telangana)', logo: '/partners/dept-agriculture-telangana.png' },
    { name: 'Prasad Seeds', logo: '/partners/prasad-seeds.png' }
  ];

  const clients = [
    { name: 'Kattangur FPCL', logo: '/partners/kattangur-fpcl.png' },
    { name: 'Two Brothers', logo: '/partners/two-brothers.png' },
    { name: 'DeHaat', logo: '/partners/dehaat.png' },
    { name: 'Organo', logo: '/partners/organo.png' }
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

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Ecosystem Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[140px] border border-gray-100"
                >
                  <div className="relative w-full h-20 mb-3">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-gray-700">{partner.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Organizations We Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[140px] border border-gray-100"
                >
                  <div className="relative w-full h-20 mb-3">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-gray-700">{client.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
