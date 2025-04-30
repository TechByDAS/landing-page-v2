import productDesignLogo from '../assets/productDesignServiceLogo.svg';
import webDevLogo from '../assets/webDevServiceLogo.svg';
import teamAugLogo from '../assets/teamAugmentationLogo.svg';
import productStrategyLogo from '../assets/productStrategyLogo.svg';

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col justify-start bg-white py-14 px-4 md:px-10 lg:px-[80px] gap-12 text-sm"
    >
      <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#0A2540] font-semibold text-center">
        Core Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            logo: productDesignLogo,
            title: 'Product Design',
            desc: 'We craft intuitive, user-focused designs that bring your ideas to life. From wireframes to polished interfaces, we ensure every detail enhances the user experience.',
          },
          {
            logo: webDevLogo,
            title: 'Web Development',
            desc: 'We create fast, responsive web solutions customized to your business requirements, ranging from landing pages to comprehensive platforms. Our team ensures peak performance.',
          },
          {
            logo: teamAugLogo,
            title: 'Team Augmentation',
            desc: 'Scale your development or design team effortlessly with our expert talent. Whether you’re facing tight deadlines or want to accelerate your product roadmap.',
          },
          {
            logo: productStrategyLogo,
            title: 'Product Strategy',
            desc: 'We sharpen your product vision and develop a clear roadmap, leveraging market trends, user insights, and business goals to drive growth and ensure long-term success.',
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-start min-h-[200px] gap-3 py-5 px-6 border border-[#D4D4D4] rounded-lg cursor-pointer bg-white hover:shadow-md transition"
          >
            <img src={service.logo} alt={`${service.title} logo`} className="w-[62px] h-[62px]" />
            <div className="flex flex-col gap-3">
              <p className="text-[#0A2540] text-xl font-medium">{service.title}</p>
              <p className="text-[#68737B] text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
