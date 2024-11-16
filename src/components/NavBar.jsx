import { useState, useEffect } from "react";
import Enlaces from "./Enlaces";
import Logo from "./Logo";

const NavBar = ({fixed = false}) => {
    
    const [ padding, setPadding ] = useState('p-4');

    useEffect(() => {
        if (fixed) {
            setPadding('');
        } else {
            setPadding('p-4');
        }
    }, [fixed]);

    return(
        <>
        <section className={`hidden justify-between ${padding} z-10 lg:flex`}>
            <Logo fixed={fixed}/>
            <Enlaces fixed={fixed}/>
        </section>
        </>
    );
}

export default NavBar;