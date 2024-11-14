import NavBar from "./components/NavBar";
import video from "./assets/fondo.mp4";
import NavBarFixed from "./components/NavBarFixed";
import Equipo from "./components/Equipo";

export default function App() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
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

        <NavBar />
        
        <NavBarFixed fixed={true}/>
        <section className="relative w-full pt-48 flex justify-center items-center z-30 text-white text-5xl">
          <h1 className="font-bold">
            Tecnología y naturaleza, por un mundo mejor
          </h1>
        </section>
      </section>

      {/* Componente Equipo que estará debajo del video */}
      <Equipo />
    </>
  );
}

