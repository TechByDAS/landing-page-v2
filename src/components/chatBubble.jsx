import chatBubbleIcon from '../assets/chatBubbleIcon.svg'

const ChatBubble = () => {
    const scrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <div className="fixed bottom-6 right-6 z-50 ">
        <button
          onClick={scrollToContact}
          className="bg-[#1E9AF1] p-2 rounded-full shadow-md cursor-pointer hover:bg-blue-600 transition"
        >
          <img src={chatBubbleIcon} alt="Chat icon" className="w-[50px] h-[50px]" />
        </button>
      </div>
    );
  };
  
  export default ChatBubble;