import productDesignLogo from '../assets/productDesignServiceLogo.svg';
import webDevLogo from '../assets/webDevServiceLogo.svg';
import teamAugLogo from '../assets/teamAugmentationLogo.svg';
import productStrategyLogo from '../assets/productStrategyLogo.svg';
// You can later replace logo for email setup with a custom one

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col justify-start bg-white py-14 px-4 md:px-10 lg:px-[80px] gap-12 text-sm"
    >
      <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#0A2540] font-semibold text-center">
        Core Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {[
          {
            logo: productDesignLogo,
            title: 'Product Design',
            desc: 'We transform ideas into clean, user-centered designs that enhance usability, engagement, and delight — from initial wireframes to final interfaces.',
          },
          {
            logo: webDevLogo,
            title: 'Web Development',
            desc: 'We build modern, fast, and scalable websites tailored to your business needs — from landing pages to complex web applications.',
          },
          {
            logo: teamAugLogo,
            title: 'Team Augmentation',
            desc: 'Hire vetted developers, designers, and marketers on demand to accelerate delivery and scale without the recruitment overhead.',
          },
          {
            logo: productStrategyLogo,
            title: 'Product Strategy',
            desc: 'We help you define, validate, and prioritize features with a clear roadmap built on user needs, technical feasibility, and business goals.',
          },
          {
            logo: productStrategyLogo, // Replace this with a dedicated email icon if you add it
            title: 'Professional Email Setup',
            desc: 'Get a branded email (like you@yourcompany.com) set up for life — no monthly fees, just a one-time setup and you’re good to go.',
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
