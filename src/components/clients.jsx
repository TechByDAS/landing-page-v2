import googleLogo from '../assets/googleLogo.svg';
import appleLogo from '../assets/appleLogo.svg';
import figmaLogo from '../assets/figmaLogo.svg';
import githubLogo from '../assets/githubLogo.svg';
const Clients =()=> {
    return (
        <section className=" bg-white px-[80px] py-[56px] flex flex-col justify-between items-center gap-[100px]">
            <h3 className="font-semibold text-[#0A2540] text-[48px]">Trusted By Industry Leaders</h3>

            <div className="flex flex-row justify-center gap-[250px]">
                <img src={googleLogo} alt="Google Logo"/>
                <img src={appleLogo} alt="Apple Logo"/>
                <img src={figmaLogo} alt="Figma Logo"/>
                <img src={githubLogo} alt="Github Logo"/>
            </div>
        </section>
    )
}

export default Clients;