import githubLogo from '../assets/githubIcon.svg';
import dasLogo from '../assets/dasTechnologyLogo.svg';
import twitterLogo from '../assets/twitterLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';

const Footer = () => {
  return (
    <section className="flex justify-center bg-white px-4 md:px-10 lg:px-[80px] py-12">
      <div className="bg-[#0A2540] w-full rounded-[20px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 text-white">
        {/* Left side */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <img src={dasLogo} alt="Das Logo" className="w-[150px]" />
          <p className="text-[14px]">
            Building digital excellence for forward-thinking businesses.
          </p>
          <div className="flex gap-4">
            <img src={githubLogo} alt="Github" className="w-6 h-6 cursor-pointer" />
            <img src={twitterLogo} alt="Twitter" className="w-6 h-6 cursor-pointer" />
            <img src={linkedinLogo} alt="Linkedin" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap gap-10 justify-between lg:w-2/3">
          {/* Services */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <p className="text-base text-[#FFB81C] font-semibold">Service</p>
            <p className="text-[14px]">Product Design</p>
            <p className="text-[14px]">Mobile Development</p>
            <p className="text-[14px]">Web Development</p>
            <p className="text-[14px]">Team Augmentation</p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <p className="text-base text-[#FFB81C] font-semibold">Company</p>
            <p className="text-[14px]">About Us</p>
            <p className="text-[14px]">Case Study</p>
            <p className="text-[14px]">Careers</p>
            <p className="text-[14px]">Contact</p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 min-w-[240px]">
            <p className="text-base text-[#FFB81C] font-semibold">Newsletter</p>
            <p className="text-[14px]">
              Stay updated with our latest news and insight!
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="text-center p-3 rounded-md border border-gray-400 placeholder-gray-500 text-black"
              />
              <button
                type="submit"
                className="mt-2 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer hover:bg-[#e6a700] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
