const team = [
  {
    name: "Joyce Katiiti",
    role: "Founder & CEO",
    phone: "+1 (781) 330‑2611",
    avatar: "👩🏾‍💼",
  },
  {
    name: "Nakimera Lilian",
    role: "Head of Human Resources",
    phone: "+256 701 342803",
    avatar: "👩🏾‍💼",
  },
  {
    name: "Edith Mbekeka",
    role: "Programs Coordinator",
    phone: "+256 766 613051",
    avatar: "👩🏾‍💼",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Team Members */}
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-6 text-center">Meet Our Team</h2>
          <div className="space-y-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
                <div className="text-4xl">{member.avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-lg text-primary">{member.name}</div>
                  <div className="text-gray-700">{member.role}</div>
                  <div className="text-gray-500 text-sm">{member.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-6 text-center">Contact Us</h2>
          <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-5 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              rows={5}
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}