"use client";

import {motion} from "framer-motion";
import ProfileSummary from "@/app/_components/About/ProfileSummary";

const About = () => {
    return (
        <section className="mx-auto w-full py-48 px-4">
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                about me
            </motion.h1>
            <ProfileSummary />
        </section>
    );
};

export default About;