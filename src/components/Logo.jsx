import { useState, useEffect } from "react";
import logo from "../assets/image.png";
import logoFixed from "../assets/logo-removebg-preview.png";

const Logo = ({ fixed }) => {
  const [masChico, setMasChico] = useState("h-1/12 w-1/12");

  useEffect(() => {
    if (fixed) {
      setMasChico("h-20 w-20 scale-150  ");
    } else {
      setMasChico("h-1/12 w-1/12");
    }
  }, [fixed]); 

  return (
    <div className={`${masChico} object-cover p-4 z-10`}>
      {!fixed && (<img src={logo} className="w-full object-cover h-full text-white" alt="Logo" />)}
      {fixed && (<img src={logoFixed} className="w-full object-cover h-full text-white" alt="Logo" />)}
    </div>
  );
};

export default Logo;
