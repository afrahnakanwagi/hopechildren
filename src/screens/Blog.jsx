

const blogPosts = [
  {
    title: "Transforming Lives: Our Journey So Far",
    excerpt: "Discover how Hope Children has impacted hundreds of lives in Uganda through faith, compassion, and action.",
    image: "/assests/children1.png",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Empowering Women: Stories of Change",
    excerpt: "Read inspiring stories of women who have found hope and empowerment through our programs.",
    image: "/assests/child1.jpg",
    date: "2024-04-15",
    link: "#"
  },
  {
    title: "Caring for the Elderly: A Community Effort",
    excerpt: "Learn how our outreach supports the elderly with dignity and love.",
    image: "/assests/elderly1.png",
    date: "2024-03-20",
    link: "#"
  },
  {
    title: "Gallery Moments: Joy in Pictures",
    excerpt: "A visual journey through our most memorable moments of hope and transformation.",
    image: "/assests/children3.png",
    date: "2024-02-10",
    link: "#"
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 py-0 flex flex-col items-center">
      {/* Page Title */}
      <div className="w-full max-w-4xl mx-auto text-center pt-12 mb-8">
        <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Our Blog</h1>
        <p className="text-lg text-gray-700 mb-2">Stories, updates, and inspiration from Hope Children Foundation.</p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full"></div>
      </div>
      {/* Featured Blog Section */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full md:w-1/3 h-56 object-cover rounded-2xl shadow-lg" />
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-2 text-primary-700">{blogPosts[0].title}</h3>
            <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
            <span className="block text-sm text-gray-400 mb-2">{blogPosts[0].date}</span>
            <a href={blogPosts[0].link} className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-300">Read More</a>
          </div>
        </div>
      </div>
      {/* Blog Card Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 md:px-0">
        {blogPosts.slice(1).map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-secondary-600 transition-colors duration-200">{post.title}</h4>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="block text-sm text-gray-400 mb-2">{post.date}</span>
              </div>
              <a href={post.link} className="mt-auto inline-block bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary-600 transition-all duration-200">Read More</a>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="w-full max-w-3xl mx-auto mt-16 text-center py-12">
        <h3 className="text-3xl font-bold text-primary mb-4">Share Your Story</h3>
        <p className="text-lg text-gray-700 mb-6">Have a testimony or story to share? Contact us and inspire others with your journey of hope!</p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">Contact Us</a>
      </div>
    </div>
  );
}