import AnimatedContent from "./componentes/AnimatedContent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center columns-2 justify-start  font-sans dark:bg-gradient-to-b from via-purple-700 bg-indigo-900">
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
            <div className=" text-7xl font-ubuntu-sans font-bold text-white">
              <h1>Thomas Pinda</h1>
              </div>
          </AnimatedContent>
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
            <div className=" text-7xl font-ubuntu-sans font-bold text-white">
              <h1>Thomas Pinda</h1>
              </div>
          </AnimatedContent>
    </div>
  );
}
