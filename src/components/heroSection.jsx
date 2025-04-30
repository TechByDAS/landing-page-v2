import heroImage from '../assets/dasHeroImage.svg';

const HeroSection = () => {
    return (
        <section className="bg-[#D5E4FE40] px-4 py-14 md:px-10 lg:px-[80px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
                <p className="text-sm md:text-base font-normal text-[#0A2540CC]">
                    Everything you need to launch, scale, and grow — all in one place.
                </p>

                <h1 className="font-semibold text-[#0A2540] text-[34px] sm:text-[42px] md:text-[52px] lg:text-[70px] leading-snug md:leading-tight">
                    Your Full-Service Digital Partner
                </h1>

                <p className="font-normal text-[#0A2540CC] text-base sm:text-lg md:text-xl leading-relaxed">
                    From professional email setup and web hosting to product design, development, marketing, and team hiring — DAS Technology helps you build, launch, and grow with confidence.
                </p>


                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4 w-full sm:w-auto">
                    <a
                        href="#contact"
                        className="bg-[#FFB81C] text-white text-base py-3 px-6 rounded-lg text-center"
                    >
                        Let's Talk
                    </a>
                    <a
                        href="#caseStudies"
                        className="border border-[#FFB81C] text-[#FFB81C] text-base py-3 px-6 rounded-lg text-center"
                    >
                        View Case Studies
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={heroImage}
                    alt="Das Hero"
                    className="w-full max-w-[400px] sm:max-w-[500px] object-contain"
                />
            </div>
        </section>
    );
};

export default HeroSection;
