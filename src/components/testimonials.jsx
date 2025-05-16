import tobiShoksAvatar from '../assets/tobiAvatar.svg';
import sarahJohnsonAvatar from '../assets/sarahJohnsonAvatar.svg';
import michChenAvatar from '../assets/michChenAvatar.svg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'TOBI SHOKZ',
      role: 'CEO, QRMENU',
      avatar: tobiShoksAvatar,
      quote:
        'We needed a fast, modern product and DAS delivered. They felt like part of our internal team from day one.',
    },
    {
      name: 'SARAH JOHNSON',
      role: 'Product Manager, Fintech',
      avatar: sarahJohnsonAvatar,
      quote:
        'DAS Technology helped us scale our web platform seamlessly while guiding design and dev decisions with confidence.',
    },
    {
      name: 'MICHAEL CHEN',
      role: 'CTO, StartupX',
      avatar: michChenAvatar,
      quote:
        'The level of support and flexibility we received was unmatched. We shipped faster and with more clarity than ever before.',
    },
  ];

  return (
    <section className="bg-[#F5F8FF] flex flex-col justify-center items-center px-4 md:px-10 lg:px-[80px] py-12 gap-12">
      <h3 className="font-semibold text-[#0A2540] text-[32px] sm:text-[40px] lg:text-[48px] text-center">
        What Our Clients Say
      </h3>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#0A2540] rounded-[32px] p-6 flex flex-col gap-5 w-full max-w-[350px]"
          >
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={`${t.name} Avatar`} className="w-12 h-12 object-contain" />
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-medium">{t.name}</p>
                <p className="text-[#FFB81C] text-xs uppercase">{t.role}</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
