import logo from "/assets/images/logo.png";
import facebookIcon from "/assets/icons/facebook.svg";
import twitterIcon from "/assets/icons/twitter.svg";
import instagramIcon from "/assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-blue text-white p-[5em] pb-[2.5em]">
      <div className="flex flex-wrap items-center justify-between max-w-[60em] m-auto mb-[3em]">
        <img className="w-[9.5em]" src={logo} alt="Logo" />
        <div className="flex flex-wrap items-center justify-between gap-[1.5em]">
          <img className="w-[1.7em]" src={facebookIcon} alt="Facebook Icon" />
          <img className="w-[1.7em]" src={twitterIcon} alt="Twitter Icon" />
          <img className="w-[1.7em]" src={instagramIcon} alt="Instagram Icon" />
        </div>
      </div>
      <p className="font-[100] text-[0.8em] text-center tracking-[0.1em]">
        ©smileschool 2020
      </p>
    </footer>
  );
};

export default Footer;
