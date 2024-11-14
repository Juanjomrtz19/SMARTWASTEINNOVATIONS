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
        <section className={`flex justify-between w-3/6 ${masChico} p-4 z-0`}>
            <a href="">Contact us</a>
            <a href="">What we do</a>
            <a href="">Work with us</a>
        </section>
    )
}

export default Enlaces;