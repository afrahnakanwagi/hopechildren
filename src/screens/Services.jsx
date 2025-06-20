const services = [
  {
    icon: "📢",
    title: "Gospel Outreach",
    desc: "Crusades, church support, and door-to-door evangelism to spread hope and faith.",
  },
  {
    icon: "🧒🏾",
    title: "Humanitarian Aid",
    desc: "Providing food, clothing, and shelter to orphans, children, and the elderly.",
  },
  {
    icon: "👩🏾‍🎓",
    title: "Women's Empowerment",
    desc: "Education and training programs to uplift and empower women.",
  },
  {
    icon: "💒",
    title: "Healing Ministries",
    desc: "Physical and spiritual healing for individuals and communities.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-primary mb-4 animate-slideDown">Our Mission & Services</h2>
        <p className="text-lg text-gray-700 mb-6 animate-fadeIn">We are dedicated to transforming lives through a range of impactful programs and outreach efforts.</p>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div key={service.title} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}