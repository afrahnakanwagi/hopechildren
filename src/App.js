import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';
import Blog from './screens/Blog';
import Gallery from './screens/Gallery';
import Contact from './screens/Contact';
import Projects from './screens/Projects';
import Donate from './screens/Donate';

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-gradient-to-br from-light via-white to-primary-50 text-dark-800 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
