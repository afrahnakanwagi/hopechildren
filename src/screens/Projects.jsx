const projects = [
  {
    icon: "🏫",
    title: "Vocational Training Centers",
    desc: "We aim to establish centers that empower women with practical skills, enabling them to build sustainable livelihoods and support their families.",
  },
  {
    icon: "🏠",
    title: "Rehabilitation Center for Girls",
    desc: "Our vision includes building a safe haven for girls, providing them with shelter, education, and emotional support to help them heal and thrive.",
  },
  {
    icon: "💊",
    title: "Addiction Treatment Center",
    desc: "We plan to launch a center dedicated to helping those struggling with addiction, offering counseling, medical care, and spiritual guidance.",
  },
  {
    icon: "📖",
    title: "Gospel Outreach Expansion",
    desc: "Expanding our reach to share the Gospel and support more communities through crusades, church support, and evangelism.",
  },
  {
    icon: "🎒",
    title: "Access to Essentials",
    desc: "We are committed to providing education, healthcare, clothing, and shelter to orphans, vulnerable children, and the elderly.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-primary text-white overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children2.png)'}} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-4 animate-slideDown">Our Projects</h1>
          <p className="text-2xl md:text-3xl font-semibold max-w-2xl mx-auto animate-fadeIn">Building a brighter future for Uganda, one project at a time.</p>
        </div>
      </div>
      {/* Projects Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[-4rem] z-20 relative px-4 pb-16">
        {projects.map((project, idx) => (
          <div key={project.title} className="bg-white border-2 border-primary/20 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn">
            <div className="text-5xl mb-4 text-primary drop-shadow-lg">{project.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-2 drop-shadow">{project.title}</h3>
            <p className="text-lg mb-4 text-gray-700">{project.desc}</p>
            <div className="w-16 h-1 bg-primary/20 rounded-full mb-2" />
            <p className="text-sm text-gray-500">Learn more about how you can support this project by contacting us or donating.</p>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="flex justify-center mt-8 mb-16 animate-fadeIn">
        <a href="/donate" className="bg-primary text-white py-4 px-12 rounded-xl text-2xl font-bold hover:bg-red-700 transition-all duration-300 shadow-2xl animate-bounce">Support Our Projects</a>
      </div>
    </div>
  );
}