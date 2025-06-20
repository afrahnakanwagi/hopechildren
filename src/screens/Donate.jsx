export default function Donate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/20 py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">Support Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8">
          Helping the Homeless, Hungry, and Hurtings Children!
        </p>
        <form className="space-y-6">
          <input
            type="number"
            min="1"
            placeholder="Donation Amount (UGX)"
            className="w-full px-5 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg text-black"
            required
          />
          <input
            type="text"
            placeholder="Your Name (optional)"
            className="w-full px-5 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg text-black"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg text-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg"
          >
            Donate Now
          </button>
        </form>
        <div className="mt-8 text-gray-500 text-sm">
          Prefer to donate via bank or mobile money? <br />
          <span className="font-semibold text-primary">Contact us for details.</span>
        </div>
      </div>
    </div>
  );
}