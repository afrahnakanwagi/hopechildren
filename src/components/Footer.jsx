import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8 shadow-2xl border-t border-gray-800">
      {/* Brand & Mission */}
      <div className="flex-1 min-w-[220px] text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-2">
          <span className="text-primary text-2xl mr-2">❤️</span>
          <h3 className="text-xl font-bold tracking-tight">Hope Children & Elderly</h3>
        </div>
        <p className="text-sm font-medium text-primary">Christian Foundation Uganda</p>
        <p className="text-xs text-gray-300 mt-1">Bringing hope to the hopeless through the Gospel of Jesus Christ.</p>
        <p className="text-xs text-gray-400">Founded in 2020 | Serving Uganda's most vulnerable</p>
      </div>
      {/* Contact Info */}
      <div className="flex-1 min-w-[220px] text-center md:text-left">
        <h4 className="text-lg font-semibold mb-2 text-primary">Contact Information</h4>
        <p className="flex items-center justify-center md:justify-start text-sm mb-1"><FaPhone className="mr-2 text-primary" /> Joyce Katiti (Founder) <br className="md:hidden" /> <span className="ml-6 md:ml-0">+1 (781) 330-2611</span></p>
        <p className="flex items-center justify-center md:justify-start text-sm mb-1"><FaPhone className="mr-2 text-primary" /> Uganda Office <br className="md:hidden" /> <span className="ml-6 md:ml-0">+256 701 342803</span></p>
        <p className="flex items-center justify-center md:justify-start text-sm"><FaMapMarkerAlt className="mr-2 text-primary" /> Uganda, East Africa</p>
      </div>
      {/* Focus Areas */}
      <div className="flex-1 min-w-[220px] text-center md:text-left">
        <h4 className="text-lg font-semibold mb-2 text-primary">Our Focus Areas</h4>
        <ul className="text-xs space-y-1 text-gray-200 font-medium">
          <li>· Gospel Outreach & Evangelism</li>
          <li>· Orphan & Child Care</li>
          <li>· Elderly Support Services</li>
          <li>· Women's Empowerment</li>
          <li>· Education & Healthcare</li>
          <li>· Community Development</li>
        </ul>
      </div>
      {/* Social & Legal */}
      <div className="flex-1 min-w-[220px] text-center md:text-left flex flex-col items-center md:items-start">
        <div className="flex space-x-4 justify-center md:justify-start mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://wa.me/256701342803" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" aria-label="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-300 font-semibold">© 2025 Hope Children & Elderly Christian Foundation Uganda. All rights reserved.</p>
        <p className="text-xs text-primary mt-1 font-medium">Made with love for Uganda's children ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;