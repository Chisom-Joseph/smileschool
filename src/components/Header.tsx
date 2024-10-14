"use client";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import logo from "/assets/images/logo.png";

const Header = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="absolute left-[50%] top-0 z-50 flex w-full max-w-[70em] translate-x-[-50%] items-center justify-between px-[4em] py-[2em] text-white">
      <img className="w-[9em]" src={logo} alt="logo" />
      <div className="relative" ref={navRef}>
        <nav
          className={`absolute right-0 top-[3em] ${
            navActive ? "flex" : "hidden"
          } w-[10em] flex-col gap-[2em] bg-white p-[2em] text-[0.8em] tracking-[0.08em] text-blue sm:w-fit md:relative md:right-0 md:top-0 md:flex md:flex-row md:gap-[4em] md:bg-transparent md:p-[0] md:text-white`}
        >
          <NavLink to="/courses">COURSES</NavLink>
          <NavLink to="/pricing">PRICING</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
        </nav>
        <div
          className="cursor-pointer"
          onClick={() => setNavActive(!navActive)}
        >
          {navActive ? (
            <FaTimes className="text-[1.3em] md:hidden" />
          ) : (
            <FaAlignRight className="text-[1.3em] md:hidden" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
