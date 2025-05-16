import fastDeliveryIcon from '../assets/fastDeliveryLogo.svg';
import scalableTeamIcon from '../assets/scalableTeamLogo.svg';
import supportIcon from '../assets/supportLogo.svg';

const WhyChooseUsSection = () => {
  return (
    <section
      id="whyDas"
      className="flex flex-col justify-center items-center gap-12 bg-white py-12 px-4 md:px-10 lg:px-[80px] mb-12"
    >
      <h3 className="font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-[#0A2540] text-center">
        Why Choose Das?
      </h3>

      <div className="flex flex-wrap justify-center gap-10 w-full">
        {[
          {
            icon: fastDeliveryIcon,
            title: 'Fast Delivery',
            desc: 'Go to market quicker with agile execution that balances speed and quality. No bottlenecks, No delays.',
          },
          {
            icon: scalableTeamIcon,
            title: 'Scalable Team',
            desc: 'Easily extend your team with vetted developers, designers, and marketers, when and how you need them.',
          },
          {
            icon: supportIcon,
            title: 'Long-Term Support',
            desc: 'We don’t just ship and disappear. We provide ongoing maintenance, optimization, and growth support.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 text-center flex-[1_1_250px] max-w-[300px]"
          >
            <img src={item.icon} alt={`${item.title} icon`} className="w-[60px] h-[60px]" />
            <p className="text-xl text-[#0A2540] font-semibold">{item.title}</p>
            <p className="text-base text-[#0A2540] font-normal">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
