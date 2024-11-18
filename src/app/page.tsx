import ReactLenis from "lenis/react";
import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About";
import Projects from "@/app/_components/Projects";
import Education from "@/app/_components/Educations";
import Experiences from "@/app/_components/Experiences";

export default function Home() {
  return (
    <main>
        <ReactLenis
            root
            options={{
                lerp: 0.05
            }}
        >
            <Hero />
            <About />
            <Projects />
            <Education />
            <Experiences />
        </ReactLenis>
    </main>
  );
}
