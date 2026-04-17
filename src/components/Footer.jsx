import twitterIcon from "../assets/images/twitter.png";
import facebookIcon from "../assets/images/facebook.png";
import videoIcon from "../assets/images/video.png";

const Footer = () => {
  return (
    <footer className="bg-[#275c4b] text-white mt-16">
      <div className="max-w-6xl mx-auto text-center py-14 px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-wide">
          KeenKeeper
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Label */}
        <p className="mt-6 text-sm text-gray-200 font-medium">
          Social Links
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="bg-gray-200 p-2.5 rounded-full">
            <img src={videoIcon} alt="Video" className="w-4 h-4" />
          </div>

          <div className="bg-gray-200 p-2.5 rounded-full">
            <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
          </div>

          <div className="bg-gray-200 p-2.5 rounded-full">
            <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">

          {/* Left */}
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          {/* Right */}
          <div className="flex gap-6">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;