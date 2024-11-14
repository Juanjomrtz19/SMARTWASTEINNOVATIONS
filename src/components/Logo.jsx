import { useState, useEffect } from "react";
import logo from "../assets/logo-removebg-preview.png";

const Logo = ({ fixed }) => {
  const [masChico, setMasChico] = useState("h-1/12 w-1/12");

  useEffect(() => {
    if (fixed) {
      setMasChico("h-20 w-20");
    } else {
      setMasChico("h-1/12 w-1/12");
    }
  }, [fixed]); 

  return (
    <div className={`${masChico} object-cover p-4 z-10`}>
      <img src={logo} className="w-full object-cover h-full" alt="Logo" />
    </div>
  );
};

export default Logo;
