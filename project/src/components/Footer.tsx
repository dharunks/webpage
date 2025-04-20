import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TastyBites</h3>
            <p className="text-gray-400 mb-4">
              Delivering delicious meals from your favorite restaurants directly to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Food Street, Tasty City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-400">support@tastybites.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">Get our app for the best experience. Available on iOS and Android.</p>
            <div className="space-y-2">
              <a href="#" className="inline-block bg-gray-800 hover:bg-gray-700 transition-colors rounded px-4 py-2 text-sm">
                Download on App Store
              </a>
              <a href="#" className="inline-block bg-gray-800 hover:bg-gray-700 transition-colors rounded px-4 py-2 text-sm">
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TastyBites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;