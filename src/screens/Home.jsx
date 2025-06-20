import Slider from "react-slick";
import { Link } from "react-router-dom";

const images = [
  "/assests/children1.png",
  "/assests/children2.png",
  "/assests/children3.png",
  "/assests/elderly1.png",
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans bg-black">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div
              className="min-h-screen bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-110"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="h-full w-full bg-gradient-to-b from-black/70 via-black/40 to-black/80 flex items-center justify-center text-center px-6 animate-fadeIn">
                <div>
                  <h1 className="text-5xl md:text-8xl font-extrabold mb-8 text-primary drop-shadow-2xl tracking-tight animate-slideDown">
                    Bringing Hope to the Hopeless
                  </h1>
                  <p className="text-2xl md:text-3xl max-w-3xl mx-auto mb-10 drop-shadow-lg animate-fadeIn">
                    We serve orphans, vulnerable children, the elderly, and women in need across Uganda, rooted in the Gospel of Christ.
                  </p>
                  <Link
                    to="/donate"
                    className="bg-primary text-white py-4 px-12 rounded-xl text-2xl font-bold hover:bg-red-700 transition-all duration-300 shadow-2xl animate-bounce"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Subtle animated overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 animate-overlayFade" />
    </div>
  );
}
