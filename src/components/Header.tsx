import { NavLink } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-[50%] translate-x-[-50%] w-full max-w-[70em] z-50 text-white flex items-center justify-between py-[2em]">
      <img className="w-[9em]" src={logo} alt="logo" />
      <nav className="flex gap-[4em] text-[0.8em] tracking-[0.08em]">
        <NavLink to="/courses">COURSES</NavLink>
        <NavLink to="/pricing">PRICING</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </nav>
    </header>
  );
};

export default Header;
