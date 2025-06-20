export default function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">Achievements So Far</h2>
        <ul className="list-disc ml-6 space-y-2 text-left text-lg text-gray-700">
          <li>Helped children return to school and graduate with top grades</li>
          <li>Provided access to quality health care for orphans and elders</li>
          <li>Delivered clothing, food, and shelter to families in need</li>
          <li>Transformed hopelessness into hope through the power of Christ</li>
        </ul>
      </div>
    </div>
  );
}