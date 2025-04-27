import dasTechLogo from '../assets/dasTechnologyLogo.svg'

const Navbar =()=> {
    return (
        <nav className="bg-[#0A2540] flex flex-row justify-between items-center py-[22px] px-[80px] text-sm">
           <div className="flex items-center">
                <img src={dasTechLogo} alt="das logo" className="cursor-pointer"/>
           </div>

            <ul className="hidden lg:flex gap-[58px]">
                <li>
                    <a href="#services" className="text-white text-[18px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Services</a>
                </li>
                <li>
                    <a href="#caseStudies" className="text-white text-[18px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Case Studies</a>
                </li>
                <li>
                    <a href="#whyDas" className="text-white text-[18px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Why Das?</a>
                </li>
                <li>
                    <a href="#contact" className="text-white text-[18px] font-normal cursor-pointer hover:text-[#FFB81C] transition-all duration-200 ">Contact</a>
                </li>

            </ul>

            <div className="hidden lg:flex justify-end items-center bg-[#FFB81C] rounded-lg outline-none">
                <a href="#contact" className="py-[15px] px-[30px] text-[20px] text-white ">
                    Let's Talk
                </a>
            </div>
            
        </nav>
    )
}

export default Navbar;