import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const NavBarFixed = ({ fixed = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavBar fixed={fixed} />
    </div>
  );
};

export default NavBarFixed;
