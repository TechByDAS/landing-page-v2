import githubLogo from '../assets/githubIcon.svg';
import dasLogo from '../assets/dasTechnologyLogo.svg';
import twitterLogo from '../assets/twitterLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
const Footer =()=> {
    return (
        <section className="flex justify-center bg-white px-[80px] py-[56px]">
            <div className="bg-[#0A2540] flex flex-row justify-between p-16 rounded-[20px] gap-16 ">
                <div className="flex flex-col justify-start gap-6 w-1/3">
                    <img src={dasLogo} alt="Das Logo"/>
                    <p className="font-normal text-[14px] text-white" > Building digital excellence for forward-thinking businesses.
                    </p>
                    <div className="flex flex-row gap-3">
                        <a href="https://github.com/TechByDAS" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="Github" className="w-8 h-8 cursor-pointer" />
                        </a>
                        <a href="https://x.com/das_tech_" target="_blank" rel="noopener noreferrer">
                            <img src={twitterLogo} alt="Twitter" className="w-8 h-8 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/das-technology-b26764363/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="Linkedin" className="w-8 h-8 cursor-pointer" />
                        </a>

                    </div>
                </div>

               

                <div className="flex flex-row justify-start align-start gap-12 w-2/3">
                    <ul className="flex flex-col justify-start gap-4">
                        <li>
                            <a href="#services" className="text-base font-semibold text-[#FFB81C] ">Services</a>
                        </li>
                        <li>
                            <a href="#productDesign" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Product Design</a>
                        </li>
                        <li>
                            <a href="#mobileDev" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Mobile Development</a>
                        </li>
                        <li>
                            <a href="#webDev" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Web Development</a>
                        </li>
                        <li>
                            <a href="#teamAugmentation" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Team Augmentation</a>
                        </li>

                    </ul>

                    <ul className="flex flex-col justify-start gap-4">
                        <li>
                            <a href="#company" className="text-base font-semibold text-[#FFB81C] ">Company</a>
                        </li>
                        <li>
                            <a href="#whyDas" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">About Us</a>
                        </li>
                        <li>
                            <a href="#caseStudies" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Case Study</a>
                        </li>
                        <li>
                            <a href="#careers" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Careers</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white text-[14px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Contact</a>
                        </li>
                    </ul>

                    <div className="flex flex-col gap-4">
                        <p className="text-base text-[#FFB81C] font-semibold">Newsletter</p>
                        <div className="flex flex-col justify-start gap-4">
                            <p className="text-white text-[14px] font-normal">Stay updated with our latest news and insight!</p>
                            <form className="flex flex-col gap-2">
                                <input type="email" placeholder="Enter your Email" className="text-center p-3 rounded-md border border-gray-400 placeholder-gray-500"/>
                                <button type="submit" className="mt-4 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;