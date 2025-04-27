import { useRef, useState, useEffect } from "react";
import rightArrow from '../assets/chevron-right.svg';
import leftArrow from '../assets/chevron-left.svg';
const CaseStudySection =()=> {
    const scrollRef = useRef(null);
    const [scrollPercent, setScrollPercent] = useState(0);

    const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

    const updateScrollProgress = () => {
    const container = scrollRef.current;
    const totalScroll = container.scrollWidth - container.clientWidth;
    const scrollPosition = container.scrollLeft;
    const progress = (scrollPosition / totalScroll) * 100;
    setScrollPercent(progress);
  };

    useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", updateScrollProgress);
    return () => container.removeEventListener("scroll", updateScrollProgress);
  }, []);

    return (
        <section id="caseStudies" className="bg-[#0A2450] flex flex-col justify-between items-center px-[80px] py-[50px] gap-[50px]">
            <div className="flex flex-col justify-center items-center gap-6">
                <h3 className="text-white text-[48px] leading-[62.38px] font-semibold">Featured Case Study</h3>
                <p className="text-white text-[18px] leading-[28.79px] font-normal">Explore our various case studies</p>
            </div>

            <div ref={scrollRef} className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide w-full pb-4">
                <div className="min-w-[300px] h-[200px] bg-cover bg-center rounded-lg flex items-end p-4 text-white h-screen cursor-pointer" style={{ backgroundImage: `url('/assets/myQrMenuBackgroundImage.svg')` }}>

                    <div>
                        <h4 className="font-bold text-xl">My QRMenu</h4>
                        <p className="text-sm">Hospitality</p>
                    </div>
                </div>

                {/* card2 */}
                <div className="min-w-[300px] h-[200px] bg-cover bg-center rounded-lg flex items-end p-4 text-white h-screen cursor-pointer" style={{ backgroundImage: `url('/assets/myQrMenuBackgroundImage.svg')` }}>

                    <div>
                        <h4 className="font-bold text-xl">My QR Menu</h4>
                        <p className="text-sm">Hospitality</p>
                    </div>
                </div>

                {/* card3 */}
                <div className="min-w-[300px] h-[200px] bg-cover bg-center rounded-lg flex items-end p-4 text-white h-screen cursor-pointer" style={{ backgroundImage: `url('/assets/myQrMenuBackgroundImage.svg')` }}>

                    <div>
                        <h4 className="font-bold text-xl">My QR Menu</h4>
                        <p className="text-sm">Hospitality</p>
                    </div>
                </div>

                {/* card 4 */}
                <div className="min-w-[300px] h-[200px] bg-cover bg-center rounded-lg flex items-end p-4 text-white h-screen cursor-pointer" style={{ backgroundImage: `url('/assets/myQrMenuBackgroundImage.svg')` }}>

                    <div>
                        <h4 className="font-bold text-xl">My QR Menu</h4>
                        <p className="text-sm">Hospitality</p>
                    </div>
                </div>

                {/* card 5 */}
                <div className="min-w-[300px] h-[200px] bg-cover bg-center rounded-lg flex items-end p-4 text-white h-screen cursor-pointer" style={{ backgroundImage: `url('/assets/myQrMenuBackgroundImage.svg')` }}>

                    <div>
                        <h4 className="font-bold text-xl">My QR Menu</h4>
                        <p className="text-sm">Hospitality</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-[500px]">
                <button onClick={() => scroll("left")} className="p-3 bg-[#FFFFFF4D] rounded-full shadow cursor-pointer">
                    <img src={leftArrow} alt="left" className="w-4 h-4" />
                </button>

                {/* <div className="flex-1 mx-4 h-3 bg-red-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 transition-all duration-300" style={{ width: `${scrollPercent}%` }}/>
                </div> */}

                <button onClick={() => scroll("right")} className="p-3 bg-[#FFFFFF4D] rounded-full shadow cursor-pointer">
                    <img src={rightArrow} alt="right" className="w-4 h-4" />
                </button>
            </div>
        </section>
    )
}

export default CaseStudySection;