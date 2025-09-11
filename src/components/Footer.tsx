import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IS</span>
              </div>
              <span className="font-playfair text-xl font-bold">
                Indori Singers
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Authentic Indian musical artists bringing the soul of Indore to your special occasions. 
              Creating unforgettable experiences through traditional and contemporary music.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/indori_singers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-sm">📷</span>
              </a>
              <a
                href="mailto:info@indorisingers.com"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-sm">✉️</span>
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-sm">📞</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-6 text-amber-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-300 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-300 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-300 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-6 text-amber-300">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Wedding Ceremonies</li>
              <li>Cultural Events</li>
              <li>Corporate Functions</li>
              <li>Private Celebrations</li>
              <li>Religious Ceremonies</li>
              <li>Custom Performances</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-6 text-amber-300">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">📍</span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm">Indore, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">info@indorisingers.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">⏰</span>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-sm">24/7 for bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Indori Singers. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-amber-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/booking" className="hover:text-amber-300 transition-colors duration-200">
                Booking Policy
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs">
              Bringing authentic Indian music to life • Professional performances for all occasions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;