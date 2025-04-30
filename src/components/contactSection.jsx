const ContactSection = () => {
    return (
      <section
        id="contact"
        className="relative bg-cover bg-center px-4 md:px-10 lg:px-[80px] py-12"
        style={{ backgroundImage: `url('/assets/contactBackgroundImage.svg')` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center text-white gap-12">
          <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-center">
            Let's Build Something Powerful Together
          </h3>
  
          <p className="text-white text-center max-w-2xl text-base sm:text-lg leading-relaxed">
            Whether you're launching a new product, upgrading your website, or building your team — we’re here to help. Fill out the form and let’s start the conversation.
          </p>
  
          <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 sm:p-10 rounded-[20px] shadow-lg">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-[#0A2540] mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="p-3 rounded-md border border-gray-400"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-[#0A2540] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="p-3 rounded-md border border-gray-400"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="company" className="text-lg text-[#0A2540] mb-1">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Enter Your Company"
                className="p-3 rounded-md border border-gray-400"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="contactMessage" className="text-lg text-[#0A2540] mb-1">
                Message
              </label>
              <textarea
                id="contactMessage"
                placeholder="Tell us what you need help with..."
                rows="4"
                className="p-3 rounded-md border border-gray-400 resize-none"
              />
            </div>
  
            <button
              type="submit"
              className="mt-4 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer hover:bg-[#e6a700] transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  