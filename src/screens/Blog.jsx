const achievements = [
  {
    icon: "🎓",
    text: "Helped children return to school and graduate with top grades",
  },
  {
    icon: "🏥",
    text: "Provided access to quality health care for orphans and elders",
  },
  {
    icon: "🍲",
    text: "Delivered clothing, food, and shelter to families in need",
  },
  {
    icon: "✨",
    text: "Transformed hopelessness into hope through the power of Christ",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-12 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-primary mb-4 animate-slideDown">Achievements So Far</h2>
        <p className="text-lg text-gray-700 mb-6 animate-fadeIn">We are grateful for the impact we've made together. Here are some of our proudest moments and milestones.</p>
      </div>
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn">
            <div className="text-5xl mb-4">{item.icon}</div>
            <p className="text-gray-700 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}