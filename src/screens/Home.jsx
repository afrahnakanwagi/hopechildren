import Slider from "react-slick";
import { Link } from "react-router-dom";

const images = [
  "/assests/children1.png",
  "/assests/children2.png",
  "/assests/children3.png",
  "/assests/elderly1.png",
];

const sections = [
  {
    title: "About Us",
    desc: "Discover our story and the mission that drives us to bring hope to the hopeless.",
    icon: "🌱",
    link: "/about",
    btn: "Learn More",
  },
  {
    title: "Our Mission",
    desc: "Explore the services and outreach programs we offer to transform lives.",
    icon: "🤝",
    link: "/services",
    btn: "See Services",
  },
  {
    title: "Achievements",
    desc: "See the impact we've made so far through our projects and stories.",
    icon: "🏆",
    link: "/blog",
    btn: "View Blog",
  },
  {
    title: "Gallery",
    desc: "Browse photos of our work and the people we serve.",
    icon: "📸",
    link: "/gallery",
    btn: "See Gallery",
  },
  {
    title: "Projects",
    desc: "Learn about our vision and long-term goals for the community.",
    icon: "🚀",
    link: "/projects",
    btn: "Our Projects",
  },
  {
    title: "Contact & Team",
    desc: "Meet our team or get in touch with us for more information.",
    icon: "📞",
    link: "/contact",
    btn: "Contact Us",
  },
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
      {/* Hero Slider */}
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

      {/* Section Previews */}
      <div className="relative z-10 -mt-24 pb-16 bg-gradient-to-b from-black/80 via-white/80 to-primary/10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-32">
          {sections.map((section, idx) => (
            <div key={section.title} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{section.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
              <p className="text-gray-700 mb-6">{section.desc}</p>
              <Link
                to={section.link}
                className="bg-primary text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-md"
              >
                {section.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
