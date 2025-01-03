"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", link: "home" },
  { name: "Projects", link: "projects" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

export const Header = () => {
  const [selected, setSelected] = useState<string>("Home");

  useEffect(() => {

    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id) {
            setSelected(id.charAt(0).toUpperCase() + id.slice(1));
          }
        }
      }); // Handle edge cases
      if (window.scrollY < 100) {
        setSelected("Home");
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setSelected("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="flex w-full justify-center items-center fixed top-3 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur scroll ">
        {navItems.map((item, i) => (
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            key={i}
            className={`nav-item ${
              selected === item.name
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            onClick={() => setSelected(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};