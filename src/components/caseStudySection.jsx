import { useRef } from "react";
import rightArrow from '../assets/chevron-right.svg';
import leftArrow from '../assets/chevron-left.svg';
import myQrImage from '../assets/myQRLabelImage.svg'; 
import kiskasImage from '../assets/kiskasLabelImage.svg';
import kokayaImage from '../assets/kokayaLabelImage.svg';
import ourHomeyImage from '../assets/ourhomeyLabelImage.svg';
import rnnImage from '../assets/rnnLabelImage.svg';

const caseStudies = [
  {
    title: "My QR Menu",
    category: "Hospitality",
    image: myQrImage,
    link: "https://myqrmenu.co",
  },

  {
    title: "Kiskas",
    category: "Email Marketing",
    image: kiskasImage,
    link: "#",
  },

  {
    title: "Kokaya",
    category: "Dev-Tech",
    image: kokayaImage,
    link: "#",
  },

  {
    title: "Our Homey",
    category: "Real estate",
    image: ourHomeyImage,
    link: "#",
  },

  {
    title: "React Native Nigeria",
    category: "Tech Community",
    image: rnnImage,
    link: "#",
  },

];

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

        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] sm:min-w-[320px] h-[400px] bg-cover bg-center rounded-lg flex items-end p-4 text-white cursor-pointer flex-shrink-0"
            style={{ backgroundImage: `url(${study.image})` }}
          >
            {/* <div>
              <h4 className="font-bold text-lg sm:text-xl">My QR Menu</h4>
              <p className="text-sm">Hospitality</p>
            </div> */}
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
