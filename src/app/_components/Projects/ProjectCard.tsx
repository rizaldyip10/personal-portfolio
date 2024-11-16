"use client";

import {motion} from "framer-motion";
import {FC} from "react";
import {FaArrowRight} from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, image }) => {
    return (
        <motion.div
            initial={{y: 48, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{ease: "easeInOut", duration: 0.75}}
            className="flex group flex-col lg:flex-row gap-4 lg:items-center justify-between border-b bg-zinc-300 border-zinc-800 p-6 text-zinc-900 hover:cursor-pointer rounded-lg"
        >
            <div className="flex flex-col gap-3 items-center md:items-start">
                <img src={image} alt="project logo" className="h-16" />
                <p className="font-medium" >{ title }</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 group-hover:text-zinc-800">
                <p>Deep Dive Project</p>
                <FaArrowRight />
            </div>
        </motion.div>
    );
};

export default ProjectCard;