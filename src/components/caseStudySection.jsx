import { useRef } from "react";
import rightArrow from '../assets/chevron-right.svg';
import leftArrow from '../assets/chevron-left.svg';
import myQrImage from '../assets/myQrMenuBackgroundImage.svg'; // Make sure you import the image

const CaseStudySection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="caseStudies"
      className="bg-[#0A2450] flex flex-col items-center px-4 md:px-10 lg:px-[80px] py-12 gap-10 text-sm"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-tight">
          Featured Case Study
        </h3>
        <p className="text-white text-base sm:text-lg font-normal">
          Explore our various case studies
        </p>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth w-full pb-4"
        style={{
          scrollbarWidth: 'none',        // Firefox
          msOverflowStyle: 'none',       // IE 10+
        }}
      >
        {/* Webkit scrollbar hide */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="min-w-[280px] sm:min-w-[320px] h-[220px] bg-cover bg-center rounded-lg flex items-end p-4 text-white cursor-pointer flex-shrink-0"
            style={{ backgroundImage: `url(${myQrImage})` }}
          >
            <div>
              <h4 className="font-bold text-lg sm:text-xl">My QR Menu</h4>
              <p className="text-sm">Hospitality</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-white/30 rounded-full hover:bg-white/40 transition"
        >
          <img src={leftArrow} alt="left" className="w-4 h-4" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="p-3 bg-white/30 rounded-full hover:bg-white/40 transition"
        >
          <img src={rightArrow} alt="right" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
