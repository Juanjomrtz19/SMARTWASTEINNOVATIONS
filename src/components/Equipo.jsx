import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import React, { useRef } from 'react';
import slide1 from '../assets/foto1.jpeg';
import slide2 from '../assets/foto2.jpeg';
import slide3 from '../assets/foto3.jpeg';
import backgroundImage from '../assets/background-2076336.jpg';
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Equipo = () => {; 
  const { ref, inView } = useInView({
    triggerOnce: false,  // Queremos que se repita cada vez que entre en vista
    threshold: 0.5,  // Se activará cuando el 50% del componente esté visible
  });

  const flickingRef = useRef(null);

  const nextSlide = () => {
    flickingRef.current.next();
  };

  const prevSlide = () => {
    flickingRef.current.prev();
  };

  return (
    <section
      className="flex items-center h-screen bg-cover bg-center bg-no-repeat w-full justify-around"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Establece la imagen de fondo
    >
      {/* Contenedor del slider y botones */}
      <motion.div
        className="relative w-2/6 h-4/6 flex items-center justify-center"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1, type: "spring" }}
        ref={ref}
        >
        <Flicking
          circular={true}  
          gap={10}
          moveType="freeScroll"
          duration={1000}
          visibleSlides={1}  
          horizontal={true}
          ref={flickingRef} 
          className="w-full h-full"
        >
          <div className="w-full h-full">
            <img src={slide1} alt="Slide 1" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-full">
            <img src={slide2} alt="Slide 2" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-full">
            <img src={slide3} alt="Slide 3" className="w-full h-full object-cover"/>
          </div>
        </Flicking>

        {/* Botón Prev */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded z-10 opacity-75 hover:opacity-100"
          onClick={prevSlide}
        >
          Prev
        </button>

        {/* Botón Next */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded z-10 opacity-75 hover:opacity-100"
          onClick={nextSlide}
        >
          Next
        </button>
      </motion.div>

      <motion.section className='flex flex-col max-w-lg gap-10'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200}}
        transition={{ duration: 1, type: "spring" }}
        ref={ref}
      >
        <h2 className='text-2xl font-semibold'>Nos dedicamos a la creación de cubos ecológicos</h2>
        <p>DRUID es un sistema de contenedores inteligentes que detecta el nivel de llenado y alerta para optimizar la recolección, evitando desbordes y mejorando la eficiencia en la gestión de residuos urbanos.</p>
      </motion.section>
    </section>
  );
};

export default Equipo;
