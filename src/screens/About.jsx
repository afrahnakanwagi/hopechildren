export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/20 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-primary/80 text-white overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: 'url(/assests/children1.png)'}} />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-4 animate-slideDown">About Us</h1>
          <p className="text-2xl md:text-3xl font-semibold max-w-2xl mx-auto animate-fadeIn">Restoring dignity, hope, and a future to those who have none.</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex justify-center mt-[-4rem] z-20 relative animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slideDown">Our Story</h2>
          <p className="mb-4 text-lg text-gray-700 animate-fadeIn">
            Founded in 2020 during the COVID-19 pandemic, our journey began with a heartfelt mission to help families suffering from hunger and poverty. One encounter with a 70-year-old grandmother caring for her four orphaned grandchildren changed everything. That moment ignited a deeper mission: to restore dignity, hope, and a future to those who have none.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn">
          <div className="text-4xl mb-2">🎯</div>
          <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
          <p className="text-gray-700">To serve orphans, vulnerable children, the elderly, and women in need across Uganda, rooted in the Gospel of Christ.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="text-4xl mb-2">🌟</div>
          <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
          <p className="text-gray-700">A world where every child, woman, and elder is valued, cared for, and empowered to thrive.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="text-4xl mb-2">💖</div>
          <h3 className="text-xl font-bold text-primary mb-2">Our Values</h3>
          <p className="text-gray-700">Compassion, faith, integrity, and a commitment to restoring hope and dignity for all.</p>
        </div>
      </div>
    </div>
  );
}
