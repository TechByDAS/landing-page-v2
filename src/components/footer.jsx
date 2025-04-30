import githubLogo from '../assets/githubIcon.svg';
import dasLogo from '../assets/dasTechnologyLogo.svg';
import twitterLogo from '../assets/twitterLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';

const Footer = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-[80px] py-12">
      <div className="bg-[#0A2540] w-full rounded-[20px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between gap-12 text-white">
        {/* Left Side */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <img src={dasLogo} alt="Das Logo" className="w-[150px]" />
          <p className="font-normal text-[14px]">
            We help startups and growing businesses launch, scale, and thrive through smart design, seamless development, and expert support.
          </p>
          <div className="flex flex-row gap-3">
            <img src={githubLogo} alt="Github" className="w-8 h-8 cursor-pointer" />
            <img src={twitterLogo} alt="Twitter" className="w-8 h-8 cursor-pointer" />
            <img src={linkedinLogo} alt="Linkedin" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-12 lg:gap-16 justify-between lg:w-2/3">
          <div className="flex flex-col gap-4 min-w-[140px]">
            <p className="text-base text-[#FFB81C] font-semibold">Services</p>
            <p className="text-white text-[14px] font-normal">Product Design</p>
            <p className="text-white text-[14px] font-normal">Mobile Development</p>
            <p className="text-white text-[14px] font-normal">Web Development</p>
            <p className="text-white text-[14px] font-normal">Team Augmentation</p>
          </div>

          <div className="flex flex-col gap-4 min-w-[140px]">
            <p className="text-base text-[#FFB81C] font-semibold">Company</p>
            <p className="text-white text-[14px] font-normal">About Us</p>
            <p className="text-white text-[14px] font-normal">Case Study</p>
            <p className="text-white text-[14px] font-normal">Careers</p>
            <p className="text-white text-[14px] font-normal">Contact</p>
          </div>

          <div className="flex flex-col gap-4 min-w-[240px]">
            <p className="text-base text-[#FFB81C] font-semibold">Newsletter</p>
            <p className="text-white text-[14px] font-normal">
              Get insights, product updates, and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="text-center p-3 rounded-md border border-gray-400 placeholder-gray-500 text-black"
              />
              <button
                type="submit"
                className="mt-2 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[#0A2540] text-sm mt-8">
        © {new Date().getFullYear()} DAS TECHNOLOGY LIMITED. Registered in England and Wales – Company No. 15818073.
      </div>
    </section>
  );
};

export default Footer;
