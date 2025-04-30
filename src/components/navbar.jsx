import { useState } from 'react';
import dasTechLogo from '../assets/dasTechnologyLogo.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#0A2540] text-sm relative z-50">
            <div className="flex justify-between items-center py-5 px-4 md:px-10 lg:px-[80px]">
                <div className="flex items-center">
                    <img
                        src={dasTechLogo}
                        alt="DAS Logo"
                        className="cursor-pointer w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] max-w-full h-auto"
                    />       </div>

                {/* Hamburger / Close Button */}
                <button
                    className="lg:hidden text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-[56px]">
                    {['Services', 'Case Studies', 'Why Das?', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                                className="text-white text-[18px] font-normal hover:text-[#FFB81C] transition-all duration-200"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex bg-[#FFB81C] rounded-lg">
                    <a href="#contact" className="py-[15px] px-[30px] text-[20px] text-white">
                        Let's Talk
                    </a>
                </div>
            </div>

            {/* Fullscreen Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#0A2540] flex flex-col justify-center items-center gap-8 text-center lg:hidden">
                    {['Services', 'Case Studies', 'Why Das?', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-2xl font-medium hover:text-[#FFB81C] transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 inline-block bg-[#FFB81C] text-white text-lg py-3 px-6 rounded-lg"
                    >
                        Let's Talk
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
