export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">See Us In Action</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Watch Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how CarbonMint is transforming agriculture through technology and sustainability
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
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
    </section>
  );
}
