import logo from "../../assets/logo.png";
import heroLogo from "../../assets/banner-main.png";

const Footer = () => {
  return (
    <div className="bg-[#060B2B] text-white pt-32 pb-6 px-4">
      
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={heroLogo} alt="logo" className="w-20 md:w-24 lg:w-36" />
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li>• Home</li>
            <li>• Services</li>
            <li>• About</li>
            <li>• Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 mb-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          {/* <div className="flex bg-white rounded-l-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-lg text-black w-full"
            />
            <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold">
              Subscribe
            </button>
          </div> */}

          <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="Enter your email" required className="text-black"/>
    </label>
    
  </div>
  <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold join-item">Subscribe</button>
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        ©2026 Your Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;