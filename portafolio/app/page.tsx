import AnimatedContent from "./componentes/AnimatedContent";
import DecryptedText from "./componentes/DecryptedText";

export default function Home() {
  return (
    <div className="h-screen bg-black place-items-center">
      <div className="grid grid-cols-2 gap-20 justify-items-center items-center h-3/4">
      <div>
        <AnimatedContent
          distance={400}
          direction="horizontal"
          reverse={true}
          duration={3}
          ease="bounce.out"
          initialOpacity={0.1}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.1}
          
          >
            <div className="font-ubuntu grid grid-rows-2 text-white">
              <h1 className="text-7xl">Thomas Pinda</h1>
              <h2>Ingeniería civil en informática</h2>
              </div>
              
          </AnimatedContent>
          </div>
        <div>
          <AnimatedContent
          distance={400}
          direction="horizontal"
          reverse={false}
          duration={3}
          ease="bounce.out"
          initialOpacity={0.1}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.1}
          >
            <div className="text-7xl font-ubuntu text-white">
              <h1>Thomas Pinda</h1>
              </div>
          </AnimatedContent>
          </div>
        </div>
          <div className="grid grid-rows-2 justify-items-start items-start text-white font-ubuntu text-center gap-5 m-20 p-20">
            <h1 className="text-6xl">Sobre mi</h1>
          <DecryptedText
              sequential={true}
              text="Estudiante de ingeniería civil en informática en la universidad de los lagos, hábil en diversos lenguajes de programación, frameworks y metodologías para el desarrollo de software, con aptitudes 
en desarrollo y diseño web, bases de datos e inteligencia artificial,
capaz de aprender cualquier lenguaje de programación necesario para
trabajar en equipo y cumplir con los objetivos del proyecto.
"
              speed={20}
              maxIterations={15}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
            /> 
            </div>
    </div>
  );
}
