import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center backdrop-blur-md transition-transform duration-300 ${
        showNav ? "translate-y-4" : "-translate-y-full"
      }`}
    >
      <div
        className="rounded-[15px] shadow-lg px-6 py-5 inline-flex"
        style={{
          background:
            "linear-gradient(120deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
        }}
      >
        <ul className="flex gap-7 font-normal text-[16px] text-[#9FA8DA] select-none">
          {navLinks.map((link) => (
            <li key={link.id} className="relative flex flex-col items-center">
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`transition-colors duration-200 ${
                  active === link.id ? "text-white" : "hover:text-[#676d8d]"
                }`}
              >
                {link.title}
              </a>
              {active === link.id && (
                <span
                  className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full w-[5px] h-[5px]"
                  style={{ bottom: "-10px" }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
