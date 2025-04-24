import tobiShoksAvatar from '../assets/tobiAvatar.svg';
import sarahJohnsonAvatar from '../assets/sarahJohnsonAvatar.svg';
import michChenAvatar from '../assets/michChenAvatar.svg';
const Testimonials =()=> {
    return (
        <section className="bg-[#F5F8FF] flex flex-col justify-center items-center px-[80px] py-[22px] gap-[56px]">
            <h3 className="font-semibold text-[#0A2540] text-[48px] text-center">Clients Testimonials</h3>
            <div className="flex flex-row justify-center items-center gap-[69px]">
                <div className="flex flex-col justify-start items-start bg-[#0A2540] p-4 rounded-[32px] gap-[20px]">
                    <div className="flex flex-row justify-start gap-[16px]">
                        <img src={tobiShoksAvatar} alt="Avatar"/>
                        <div className="flex flex-col gap-[7px]">
                            <p className="font-normal text-white text-[18px] leading-[18px]">TOBI SHOKZ</p>
                            <p className="font-normal text-[#FFB81C] text-[12px] leading-[18px]">CEO, QRMENU</p>
                        </div>
                    </div>

                    <p className="font-normal text-white text-[16px] leading-[32px]">"DAS Technology transformed our digital presence with their innovative solutions and professional approach."
                    </p>
                
                </div>

                <div className="flex flex-col justify-start items-start bg-[#0A2540] p-4 rounded-[32px] gap-[20px]">
                    <div className="flex flex-row justify-start gap-[16px]">
                        <img src={sarahJohnsonAvatar} alt="Avatar"/>
                        <div className="flex flex-col gap-[7px]">
                            <p className="font-normal text-white text-[18px] leading-[18px]">SARAH JOHNSON</p>
                            <p className="font-normal text-[#FFB81C] text-[12px] leading-[18px]">PRODUCT MANAGER, FINTECH</p>
                        </div>
                    </div>

                    <p className="font-normal text-white text-[16px] leading-[32px]">"The team's technical expertise and dedication to our project's success were outstanding."
                    </p>
                
                </div>

                <div className="flex flex-col justify-start items-start bg-[#0A2540] p-4 rounded-[32px] gap-[20px]">
                    <div className="flex flex-row justify-start gap-[16px]">
                        <img src={michChenAvatar} alt="Avatar"/>
                        <div className="flex flex-col gap-[7px]">
                            <p className="font-normal text-white text-[18px] leading-[18px]">MICHAEL CHEN</p>
                            <p className="font-normal text-[#FFB81C] text-[12px] leading-[18px]">CTO, STARTUPX</p>
                        </div>
                    </div>

                    <p className="font-normal text-white text-[16px] leading-[32px]">"Working with DAS has been a game-changer for our development process and team productivity."
                    </p>
                
                </div>
            </div>

                
            
        </section>
    )
}

export default Testimonials;