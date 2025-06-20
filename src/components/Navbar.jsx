import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-primary">Hope Foundation</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-primary">Home</Link></li>
        <li><Link to="/about" className="hover:text-primary">About</Link></li>
        <li><Link to="/services" className="hover:text-primary">Services</Link></li>
        <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
        <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
        <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
        <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
        <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
      </ul>
    </nav>
  );
}
