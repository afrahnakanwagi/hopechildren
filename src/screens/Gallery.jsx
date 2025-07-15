import Slider from "react-slick";

const galleryImages = [
  "/assests/chi1.jpg",
  "/assests/chi2.jpg",
  "/assests/child.jpg",
  "/assests/child1.jpg",
  "/assests/child2.jpg",
  "/assests/child3.jpg",
];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    dotsClass: "slick-dots !bottom-4",
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 py-0 flex flex-col items-center">
      {/* Hero Slider */}
      <div className="w-full max-w-6xl mx-auto mb-12 pt-8">
        <Slider {...settings}>
          {galleryImages.map((src, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img src={src} alt={`Gallery Slide ${idx + 1}`} className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white" />
            </div>
          ))}
        </Slider>
      </div>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-8">
        <div className="h-1 w-32 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full"></div>
      </div>
      {/* Masonry Grid */}
      <div className="w-full max-w-6xl px-2 md:px-0 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px]">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 hover:bg-white">
            <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-lg font-semibold drop-shadow-lg">Image {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="w-full max-w-3xl mx-auto mt-16 text-center py-12">
        <h3 className="text-3xl font-bold text-primary mb-4">Want to see more?</h3>
        <p className="text-lg text-gray-700 mb-6">Follow us on social media or contact us to get involved and help us create more moments of hope and joy!</p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">Contact Us</a>
      </div>
    </div>
  );
}