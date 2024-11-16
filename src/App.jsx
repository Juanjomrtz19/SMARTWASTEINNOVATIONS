import NavBar from "./components/NavBar";
import video from "./assets/fondo.mp4";
import NavBarFixed from "./components/NavBarFixed";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import NavBarMovil from "./components/NavBarMovil";

export default function App() {
  return (
    <>
      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
        `}
      </style>

      <section className="relative min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          onEnterPictureInPicture={(e) => e.preventDefault()}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        
        <div className="z-50">
        <NavBar />
        <NavBarMovil/>
        <NavBarFixed fixed={true} />
        <section className="hidden relative w-full pt-48 lg:flex justify-center items-center z-30 text-white text-5xl">
          <h1  className="lg:font-extrabold p-10 lg:p-0">Bienvenid@ a Smart Waste Innovations</h1>
        </section>
        <section className="flex lg:hidden w-full h-screen items-center justify-center z-30 text-white relative font-extrabold text-3xl p-4">
          <h1>Bienvenid@ a Smart Waste Innovations</h1>
        </section>
        </div>
      </section>

      <Equipo />
      <Footer />
    </>
  );
}
