import fastDeliveryIcon from '../assets/fastDeliveryLogo.svg';
import scalableTeamIcon from '../assets/scalableTeamLogo.svg';
import supportIcon from '../assets/supportLogo.svg';

const WhyChooseUsSection =()=> {
    return (
        <section id="whyDas" className="flex flex-col justify-center items-center gap-[58px] bg-white py-[50px] px-[80px] mb-12">
            <h3 className="font-semibold text-[48px] text-[#0A2540]">Why Choose Das?</h3>
                
            <div className="flex flex-row justify-center items-center gap-[51px]">
                 <div className="flex flex-col justify-center items-center gap-[18px]">
                    <img src={fastDeliveryIcon} alt="Fast Delivery icon" className="self-center" />
                    <p className="text-[25px] text-[#0A2540] font-semibold">Fast Delivery</p>
                     <p className="text-[18px] text-[#0A2540] font-normal text-center">Quick turnaround without compromise</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-[18px]">
                    <img src={scalableTeamIcon} alt="Scalable Team Icon" className="self-center" />
                    <p className="text-[25px] text-[#0A2540] font-semibold">Scalable Team</p>
                     <p className="text-[18px] text-[#0A2540] font-normal text-center">Flexible team scaling based on your needs.</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-[18px]">
                    <img src={supportIcon} alt="Support icon" className="self-center" />
                    <p className="text-[25px] text-[#0A2540] font-semibold">Long Term Support</p>
                     <p className="text-[18px] text-[#0A2540] font-normal text-center">Dedicated Support and Maintenance</p>
                </div>
                
            </div>
        </section>
    )
}

export default WhyChooseUsSection;