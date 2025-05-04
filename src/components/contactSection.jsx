export default function ContactSection() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form);
    
        formData.append("access_key", "a117415c-03e2-4afc-9726-c4ca8952dc76");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            form.reset();
            alert("Thank you! Your message has been sent successfully.");
          }
      };


    return (
        <section id="contact" className="relative bg-cover bg-center px-[80px] py-[56px]" style={{ backgroundImage: `url('/assets/contactBackgroundImage.svg')`}}>
            <div className="relative z-10 flex flex-col justify-center items-center text-white h-full gap-[56px]">
                <h3 className="text-[48px] font-semibold mb-4">Collaborate with Us to Build Something Great</h3>
                
                <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-10 rounded-[20px]">
                    <label htmlFor="name" className="text-lg text-[#0A2540] mb-2">Full Name</label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="p-3 rounded-md border border-gray-400 text-gray-900"
                    />
                    <label htmlFor="email" className="text-lg mb-2 text-[#0A2540]">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="p-3 rounded-md border border-gray-400 text-gray-900"
                    />
                    <label htmlFor="company" className="text-lg mb-2 text-[#0A2540]">Company</label>
                    <input
                        name="company"
                        id="company"
                        type="text"
                        placeholder="Enter Your Company"
                        className="p-3 rounded-md border border-gray-400 text-gray-900"
                    />
                    <label htmlFor="contactMessage" className="text-lg mb-2 text-[#0A2540]">Message</label>
                    <textarea
                        name="message"
                        id="contactMessage"
                        placeholder="Your Message"
                        className="p-3 rounded-md border border-gray-400 text-gray-900"
                    />
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="subject" value="New Contact Form Submission" />
                    <button type="submit" className="mt-4 p-3 bg-[#FFB81C] text-white rounded-md cursor-pointer">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

