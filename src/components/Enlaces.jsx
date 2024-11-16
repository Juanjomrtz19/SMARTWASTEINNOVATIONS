import { useEffect, useState } from "react";

const Enlaces = ({fixed}) => {
    const [masChico, setMasChico] = useState("text-2xl text-white");
    useEffect(() => {
        if (fixed) {
          setMasChico("text-xl items-center");
        } else {
          setMasChico("text-2xl text-white");
        }
      }, [fixed]); 
    return (
        <section className={`flex justify-between w-3/6 ${masChico} p-4 z-0 font-bold`}>
            <a href="">Contáctanos</a>
            <a href="">Qué hacemos</a>
            <a href="">Trabaja con nosotros</a>
        </section>
    )
}

export default Enlaces;