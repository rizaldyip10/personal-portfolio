"use client";

import {motion} from "framer-motion";
import EducationCard from "@/app/_components/Educations/EducationCard";

const Education = () => {
    return (
        <section className="mx-auto w-full py-48 px-4">
            <motion.h1
                initial={{y: 48, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ease: "easeInOut", duration: 0.75}}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                educations
            </motion.h1>
            <EducationCard
                image="/images/educations/logo-itb.png"
                degree="Bachelor of Science in Aerospace Engineering"
                location="Bandung, West Java, Indonesia"
                university="Bandung Institute of Technology"
            />
            <EducationCard
                image="/images/educations/pwdk.png"
                degree="Software Engineering Digital Talent Incubator"
                location="Batam, Riau Island, Indonesia"
                university="Purwadhika Digital School"
            />
            <EducationCard
                image="/images/educations/pwdk.png"
                degree="Full-stack Web Development Bootcamp"
                location="Bandung, West Java, Indonesia"
                university="Purwadhika Digital School"
            />
        </section>
    );
};

export default Education;