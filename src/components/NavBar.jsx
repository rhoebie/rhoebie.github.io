import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("home");
  const observer = useRef(null);

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

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.id);
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach(section => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ${showNav ? "translate-y-4" : "-translate-y-full"
        }`}
    >
      <div
        className="px-6 py-5 rounded-[15px] shadow-xl backdrop-blur-md inline-block"
        style={{
          background:
            "linear-gradient(120deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
        }}
      >
        <ul className="flex gap-7 font-medium text-[16px] text-[#9FA8DA] select-none">
          {navLinks.map((link) => (
            <li key={link.id} className="relative flex flex-col items-center">
              <button
                type="button"
                onClick={() => {
                  setActive(link.id);
                  const section = document.getElementById(link.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`transition-colors duration-200 ${active === link.id ? "text-white" : "hover:text-[#676d8d]"
                  }`}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                {link.title}
              </button>
              {active === link.id && (
                <span className="absolute -bottom-2 w-[5px] h-[5px] bg-white rounded-full" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;