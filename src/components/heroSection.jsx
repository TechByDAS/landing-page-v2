import heroImage from '../assets/dasHeroImage.svg'

const HeroSection =()=> {
    return (
        <section className="bg-[#D5E4FE40] flex justify-between items-center py-[102px] px-[80px]">
            <div className="flex flex-col justify-start items-center gap-6 w-1/2">
                <div className="flex flex-col gap-[20px]">
                    <p className="text-base font-normal text-[#0A2540CC]">Your Partner in Innovation & Growth.</p>
                    <h1 className="font-semibold text-[#0A2540] text-[70px] leading-[63.53px]">
                        Fueling Innovation, Scaling Success.
                    </h1>
                    <p className="font-normal text-[#0A2540CC] text-[18.96px] leading-[28.45px]">Your trusted ally in product design and development empowering you with smarter products, agile teams, and accelerated growth.</p>
                </div>

                <div className="flex flex-row justify-start gap-[12px] w-full">
                    <div className="hidden lg:flex items-start bg-[#FFB81C] rounded-lg">
                        <a href="#contact" className=" inline-block py-[15px] px-[30px] text-[20px] text-white ">
                            Let's Talk
                        </a>
                    </div>

                    <div className="hidden lg:flex border border-[#FFB81C] rounded-lg">
                        <a href="#caseStudies" className=" inline-block py-[15px] px-[30px] text-[20px] text-[#FFB81C] ">
                            View Case Studies
                        </a>
                    </div>
                </div>
            </div>

            <img src={heroImage} alt="Das Hero" className="w-1/2"/>
        </section>
    )
}

export default HeroSection;