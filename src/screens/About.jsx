import { FaCalendarAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Content */}
        <div className="space-y-6">
          {/* Founded in 2020 */}
          <div className="flex items-center text-orange-500 font-semibold text-lg">
            <FaCalendarAlt className="mr-2" />
            Founded in 2020
          </div>

          {/* Paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed">
Founded in 2020 during the COVID-19 pandemic, our journey began with a heartfelt mission to help families suffering from hunger and poverty. With no formal resources—just a calling from God—we started distributing food to those in need.          </p>

          {/* Quote box */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl shadow-sm">
            <p className="italic text-gray-700">
              "One encounter with a 70-year-old grandmother caring for her four orphaned grandchildren changed everything. With no beds, no food, and no chance of returning to school, they were on the edge of survival."
            </p>
          </div>

          {/* Mission */}
          <p className="text-gray-700 text-lg leading-relaxed">
            That moment ignited a deeper mission: to restore dignity, hope, and a future to those who have none. Since then, God has continued to bless this ministry, allowing us to support even more children, families, and communities in desperate need.
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {/* The Turning Point Box */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
            <p className="text-gray-700 mb-4">
              What started as simple food distribution became a life-changing ministry when we met that grandmother and her grandchildren.
            </p>
            <ul className="list-disc list-inside text-orange-600 space-y-2 font-medium">
              <li>No beds to sleep on</li>
              <li>No food to eat</li>
              <li>No hope for school</li>
            </ul>
          </div>

          {/* Final Quote Box */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center p-4 rounded-xl font-semibold shadow-md">
            "We started with nothing but faith—and today, lives are being changed."
          </div>
        </div>
      </div>
    </div>
  );
}
