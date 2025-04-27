import productDesignLogo from '../assets/productDesignServiceLogo.svg'
import webDevLogo from '../assets/webDevServiceLogo.svg'
import teamAugLogo from '../assets/teamAugmentationLogo.svg'
import productStrategyLogo from '../assets/productStrategyLogo.svg'

const ServicesSection =()=> {
    return (
        <section id="services" className="flex flex-col justify-start bg-white py-[56px] px-[80px] gap-[58px] text-sm">
           <h3 className="text-[48px] text-[#0A2540] font-semibold text-center">Core Services</h3>

           <div className="flex flex-wrap lg:flex-nowrap justify-start items-stretch gap-[23.91px]">
                <div className="flex flex-col justify-start flex-1 min-h-[200px] gap-[8.54px] py-[17px] px-[21px] border border-[#D4D4D4] rounded-lg cursor-pointer">
                    <img src={productDesignLogo} alt="Product Design" className="w-[62px] h-[62px]"/>
                    <div className="flex flex-col justify-start gap-[12.81px]">
                        <p className="text-[#0A2540] text-[25px] font-normal">Product Design</p>
                        <p className="text-[#68737B] text-base font-normal leading-[26.47px]">We craft intuitive, user-focused designs that bring your ideas to life. From wireframes to polished interfaces, we ensure every detail enhances the user experience.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start flex-1 min-h-[200px] gap-[8.54px] py-[17px] px-[21px] border border-[#D4D4D4] rounded-lg cursor-pointer">
                    <img src={webDevLogo} alt="Web Dev logo" className="w-[62px] h-[62px]"/>
                    <div className="flex flex-col justify-start gap-[12.81px]">
                        <p className="text-[#0A2540] text-[25px] font-normal">Web Development</p>
                        <p className="text-[#68737B] text-base font-normal leading-[26.47px]">We create fast, responsive web solutions customized to your business requirements, ranging from landing pages to comprehensive platforms. Our team ensure peak performance.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start  flex-1 min-h-[200px] gap-[8.54px] py-[17px] px-[21px] border border-[#D4D4D4] rounded-lg cursor-pointer">
                    <img src={teamAugLogo} alt="Team Augmentation" className="w-[62px] h-[62px]"/>
                    <div className="flex flex-col justify-start gap-[12.81px]">
                        <p className="text-[#0A2540] text-[25px] font-normal">Team Augmentation</p>
                        <p className="text-[#68737B] text-base font-normal leading-[26.47px]">Scale your development or design team effortlessly with our expert talent. Whether you're facing tight deadlines, or want to accelerate your product roadmap.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start  flex-1 min-h-[200px] gap-[8.54px] py-[17px] px-[21px] border border-[#D4D4D4] rounded-lg cursor-pointer">
                    <img src={productStrategyLogo} alt="Product Strategy logo" className="w-[62px] h-[62px]"/>
                    <div className="flex flex-col justify-start gap-[12.81px]">
                        <p className="text-[#0A2540] text-[25px] font-normal">Product Strategy</p>
                        <p className="text-[#68737B] text-base font-normal leading-[26.47px]">We sharpen your product vision and develop a clear roadmap, leveraging market trends, user insights, and business goals to drive growth and ensure long-term success.</p>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default ServicesSection;