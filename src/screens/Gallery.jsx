const galleryImages = [
  "/assests/children1.png",
  "/assests/children2.png",
  "/assests/children3.png",
  "/assests/elderly1.png",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-primary mb-4 animate-slideDown">Gallery</h2>
        <p className="text-lg text-gray-700 mb-6 animate-fadeIn">A glimpse into our work and the lives we touch. Explore our moments of hope, joy, and transformation.</p>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 animate-fadeIn">
            <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover object-center transition-all duration-500 hover:brightness-90" />
          </div>
        ))}
        {/* Placeholder if no images */}
        {galleryImages.length === 0 && (
          <div className="col-span-full text-gray-400 text-xl">No images yet. Check back soon!</div>
        )}
      </div>
    </div>
  );
}