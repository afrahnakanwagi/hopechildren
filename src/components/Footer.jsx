export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/20 border-t border-white/30 shadow-lg text-white p-8 mt-8 text-center flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-2xl transition-colors" aria-label="Facebook"><i className="fab fa-facebook"></i>📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-2xl transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i>🐦</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-2xl transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i>📸</a>
        <a href="https://wa.me/256701342803" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-2xl transition-colors" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i>💬</a>
      </div>
      <p>© 2025 Hope Children & Elderly Christian Foundation Uganda. All Rights Reserved.</p>
      <p className="text-sm mt-2">“We started with nothing but faith—and today, lives are being changed.”</p>
    </footer>
  );
}
