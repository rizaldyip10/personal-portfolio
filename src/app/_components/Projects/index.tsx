"use client";

import {motion} from "framer-motion";
import ProjectCard from "@/app/_components/Projects/ProjectCard";

const Projects = () => {
    return (
        <section className="mx-auto w-full py-48 px-4">
            <motion.h1
                initial={{y: 48, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ease: "easeInOut", duration: 0.75}}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                projects
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ProjectCard title="Property Renting App" image="/images/projects/stayease-logo.png" />
                <ProjectCard title="Company Profile Web" image="/images/projects/whitecollar.png" />
                <ProjectCard title="Blog Web App" image="/images/projects/pennpixel.png" />
            </div>
        </section>
);
};

export default Projects;