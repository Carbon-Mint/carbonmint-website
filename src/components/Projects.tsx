export default function Projects() {
  const projects = [
    {
      title: 'SBI Foundation',
      description: 'CarbonMint, in collaboration with SBI Foundation and ICAR-IIRR, is empowering sustainable rice cultivation through our digital dMRV platform and PraanaDhaara\'s mechanization and Direct Seeding of Rice (DSR) expertise, driving climate-resilient farming and resource optimization',
    },
    {
      title: 'ACRAT',
      description: 'The ACRAT project, led by Fraunhofer HHI, aims to enhance climate-resilient agriculture in Telangana by integrating advanced technologies. As part of this initiative, CarbonMint contributes its digital dMRV platform to monitor and verify sustainable farming practices, collaborating with startups like BharatRohan, KrishiTantra, and DeltaThings',
    },
    {
      title: 'Bayer Carbon Zero',
      description: 'Praanadhaara, as the implementation partner for Bayer\'s Carbon Zero commitment, leverages the CarbonMint digital platform to capture on-the-ground monitoring data for dMRV. This collaboration strengthens our efforts to mitigate climate change by optimizing resource use and tracking agricultural sustainability practices, ensuring transparency and accuracy in carbon impact measurement.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
