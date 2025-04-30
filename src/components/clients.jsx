import googleLogo from '../assets/googleLogo.svg'; 
import qrcode from '../assets/Logo.png';  

const Clients = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-[80px] py-12 flex flex-col items-center gap-12">
      <h3 className="font-semibold text-[#0A2540] text-[32px] sm:text-[40px] lg:text-[48px] text-center">
        Trusted By Industry Leaders
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
        <img src={googleLogo} alt="Google Logo" className="h-10 sm:h-12 object-contain" />
        <img src={qrcode} alt="Apple Logo" className="h-10 sm:h-12 object-contain" />
        </div>
    </section>
  );
};

export default Clients;
