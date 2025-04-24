const ContactSection =()=> {
    return (
        <section id="contact" className="relative bg-cover bg-center px-[80px] py-[56px]" style={{ backgroundImage: `url('/assets/contactBackgroundImage.svg')`}}>
            <div className="relative z-10 flex flex-col justify-center items-center text-white h-full gap-[56px]">
                <h3 className="text-[48px] font-semibold mb-4">Collaborate with Us to Build Something Great</h3>
                
                <form className="flex flex-col gap-4 w-full max-w-md bg-white p-10 rounded-[20px]">
                    <label htmlFor="name" className="text-lg text-[#0A2540] mb-2">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="p-3 rounded-md border border-gray-400"
                    />
                    <label htmlFor="name" className="text-lg mb-2 text-[#0A2540]">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="p-3 rounded-md border border-gray-400"
                    />
                    <label htmlFor="company" className="text-lg mb-2 text-[#0A2540]">Company</label>
                    <input
                        id="company"
                        type="text"
                        placeholder="Enter Your Company"
                        className="p-3 rounded-md border border-gray-400"
                    />
                    <label htmlFor="contactMessage" className="text-lg mb-2 text-[#0A2540]">Message</label>
                    <textarea
                        id="contactMessage"
                        placeholder="Your Message"
                        className="p-3 rounded-md border border-gray-400"
                    />
                    <button type="submit" className="mt-4 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;