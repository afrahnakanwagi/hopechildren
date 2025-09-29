import { Link } from "react-router-dom";
import {
  FaHeart,
  FaHandHoldingHeart,
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
  routingNumber: "2113-705415",
  accountNumber: "826567920",
  accountName: "Katiiti Joyce",
};

export default function Donate() {
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

                {/* Mobile Money */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaPhone className="text-green-600 text-2xl" />
                    <h3 className="text-xl font-bold text-dark-800">
                      Mobile Money Donations
                    </h3>
                  </div>
                  <ul className="space-y-2 text-dark-700">
                    <li>
                      <span className="font-semibold">Receiver Name:</span>{" "}
                      Nakimera Lilian
                    </li>
                    <li>
                      <span className="font-semibold">MTN/Airtel Number:</span>{" "}
                      0779150560
                    </li>
                    <li className="text-sm text-dark-600">
                      Send directly via Mobile Money and confirm with our team.
                    </li>
                  </ul>
                  {/* <a
                    href="tel:*165*1*"
                    className="mt-4 inline-block bg-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-green-700 transition"
                  >
                    Or Directly Open Mobile Money (MTN/Airtel)
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ways You Can Help */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Ways You Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaHeart className="text-5xl text-primary-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              Contribute to our programs and help us reach more children with
              food, shelter, and education.
            </p>
            <a
              href="tel:*165*1*0779150560#"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800"
            >
              Donate Now <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaUsers className="text-5xl text-secondary-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Sponsor a Child</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to support a child's education, health, and
              spiritual growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-800"
            >
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaHandsHelping className="text-5xl text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Join hands with us as a church, organization, or individual to
              expand our reach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-800"
            >
              Get Involved <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Your Support Makes This Possible
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaGraduationCap className="text-4xl text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">
                Providing quality education and school supplies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaHome className="text-4xl text-secondary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Shelter</h3>
              <p className="text-gray-600">
                Safe housing for vulnerable children and families.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaGift className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Food Support</h3>
              <p className="text-gray-600">
                Nutritious meals for children and families in need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaHandsHelping className="text-4xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong, supportive, faith-based communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Every donation, prayer, and partnership helps us bring hope to more
            families in the world. Together, we can transform lives through the
            love of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
    href="tel:*165*10#"
    className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
  >
    Donate Now
  </a>
            <a
              href="/contact"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
