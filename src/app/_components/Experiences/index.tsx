"use client";

import {motion} from "framer-motion";
import ExperienceCard from "@/app/_components/Experiences/ExperienceCard";

const Experiences = () => {
    return (
        <section className="mx-auto w-full py-48 px-4">
            <motion.h1
                initial={{y: 48, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ease: "easeInOut", duration: 0.75}}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                experiences
            </motion.h1>
            <ExperienceCard
                image="/images/experiences/dms.png"
                company="Dynamic Management Solutions (DMS)"
                position="Full-stack Developer Intern"
                years="Jul 2024 - Now"
                location="Jakarta, Indonesia"
            />
            <ExperienceCard
                image="/images/experiences/citilink.png"
                company="Citilink Indonesia"
                position="Flight Routes Management Intern"
                years="Jul 2020 - Sep 2020"
                location="Jakarta, Indonesia"
            />
        </section>
    );
};

export default Experiences;