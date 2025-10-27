// DonatePayment.jsx
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaPhone,
  FaArrowRight,
  FaUniversity,
  FaGift,
  FaHome,
} from "react-icons/fa";

const bankTransfer = {
  bankName: "TD Bank",
  routingNumber: "2113-70545",
  accountNumber: "8265167920",
  accountName: "Hope Christian Foundation",
};

const mobileMoney = {
  name: "Nakimera Lilian",
  number: "0779150560",
  methods: ["Sendwave", "Western Union", "Zelle", "Venmo", "MoneyGram"],
};

export default function DonatePayment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Every contribution makes a difference in the lives of children and
            families we serve. Join us in bringing hope and transformation to
            communities.
          </p>
        </div>
      </div>

      {/* Ways to Give */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
                Ways to Give
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed text-center">
              <p className="text-xl mb-6">
                You can donate by bank transfer, mobile money, or any other
                support the Lord puts on your heart.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
                {/* Bank Transfer */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity className="text-primary-600 text-2xl" />
                    <h3 className="text-xl font-bold text-dark-800">
                      Bank Transfer Details
                    </h3>
                  </div>
                  <ul className="space-y-2 text-dark-700">
                    <li>
                      <span className="font-semibold">Bank name:</span>{" "}
                      {bankTransfer.bankName}
                    </li>
                    <li>
                      <span className="font-semibold">Routing number:</span>{" "}
                      {bankTransfer.routingNumber}
                    </li>
                    <li>
                      <span className="font-semibold">Account number:</span>{" "}
                      {bankTransfer.accountNumber}
                    </li>
                    <li>
                      <span className="font-semibold">Account name:</span>{" "}
                      {bankTransfer.accountName}
                    </li>
                  </ul>
                </div>

                {/* Mobile Money / Digital Methods */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <FaPhone className="text-green-600 text-2xl" />
                    <h3 className="text-xl font-bold text-dark-800">
                      Mobile & Digital Donations
                    </h3>
                  </div>
                  <p className="text-dark-700 mb-4">
                    <span className="font-semibold">Receiver Name:</span>{" "}
                    {mobileMoney.name}
                  </p>
                  <p className="text-dark-700 mb-6">
                    <span className="font-semibold">Contact Number:</span>{" "}
                    {mobileMoney.number}
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    {mobileMoney.methods.map((method) => (
                      <button
                        key={method}
                        className="bg-green-600 text-white py-2 px-5 rounded-xl font-semibold shadow-md hover:bg-green-700 transition transform hover:scale-105"
                        onClick={() =>
                          alert(`Send via ${method} to ${mobileMoney.number}`)
                        }
                      >
                        {method}
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-dark-600">
                    Click a button above to see instructions or send directly
                    using the selected method.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining sections (Ways You Can Help, Impact Areas, Call to Action) remain unchanged */}
    </div>
  );
}
