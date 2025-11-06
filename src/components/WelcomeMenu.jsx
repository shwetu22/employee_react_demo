import { FaFacebook, FaTwitter, FaInstagram,FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-600 text-gray-200 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-2xl font-bold tracking-wide">Employee</div>
        
        <div className="space-x-6 mt-4 md:mt-0">
          <Link to={'/login'} className="hover:text-yellow-300 transition"> Login</Link>
          <Link to={'/register'} className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition">
            Register
          </Link>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><FaFacebook className="text-white text-xl hover:text-blue-500 transition" /></a>
          <a href="#"><FaTwitter className="text-white text-xl hover:text-sky-400 transition" /></a>
          <a href="#"><FaInstagram className="text-pink text-xl hover:text-pink-500 transition" /></a>
          <a href="#"><FaGithub className="text-white text-xl hover:text-pink-500 transition" /></a>
          <a href="#"><FaLinkedin className="text-blue text-xl hover:text-blue-500 transition" /></a>
          <a href="#"><FaSpotify className="text-green text-xl hover:text-green-500 transition" /></a>
        </div>
      </div>

      
    </div>
  );
}

export default Footer;
