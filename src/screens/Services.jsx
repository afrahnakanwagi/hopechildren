export default function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">Our Mission</h2>
        <ul className="list-disc ml-6 space-y-2 text-left text-lg text-gray-700">
          <li>Gospel outreach (crusades, church support, and door-to-door evangelism)</li>
          <li>Humanitarian aid to orphans, children, and the elderly</li>
          <li>Women’s empowerment and education programs</li>
          <li>Physical and spiritual healing ministries</li>
        </ul>
      </div>
    </div>
  );
}