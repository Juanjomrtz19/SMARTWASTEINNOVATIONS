import Enlaces from "./Enlaces";
import Logo from "./Logo";

const NavBar = ({fixed = false}) => {

    return(
        <>
        <section className="flex justify-between p-4 z-10 ">
            <Logo fixed={fixed}/>
            <Enlaces fixed={fixed}/>
        </section>
        </>
    );
}

export default NavBar;