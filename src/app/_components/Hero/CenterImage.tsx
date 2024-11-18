"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface CenterImageProps {
    sectionHeight: number;
}

const CenterImage: FC<CenterImageProps> = ({ sectionHeight }) => {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adjust clip values based on screen size
    const mobileClip1Start = 10;
    const desktopClip1Start = 25;
    const clip1Start = isMobile ? mobileClip1Start : desktopClip1Start;

    const clip1 = useTransform(scrollY, [0, 1500], [clip1Start, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [100 - clip1Start, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, sectionHeight + 500],
        ["170%", "100%"]
    );

    const opacity = useTransform(
        scrollY,
        [sectionHeight, sectionHeight + 500],
        [1, 0]
    );

    const textOpacity = useTransform(
        scrollY,
        [0, 400],
        [1, 0]
    );

    const textY = useTransform(
        scrollY,
        [0, 400],
        [0, -50]
    );

    const backgroundOpacity = useTransform(
        scrollY,
        [0, 500],
        [0, 0.7]
    );

    return (
        <motion.div
            className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
            style={{
                clipPath,
                backgroundSize,
                opacity,
            }}
        >
            <motion.div
                className="absolute inset-0 bg-black/50"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: backgroundOpacity,
                }}
            />

            <motion.div
                className="relative z-10 flex flex-col items-center gap-2 text-zinc-50 px-4 max-w-full"
                style={{
                    opacity: textOpacity,
                    y: textY
                }}
            >
                <motion.h1
                    className="text-xl lg:text-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.75, ease: "easeInOut"}}
                >
                    Hello, there!
                </motion.h1>
                <motion.h1
                    className="text-base text-wrap lg:text-2xl text-center font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.75, ease: "easeInOut"}}
                >
                    I&apos;m <span className="font-bold text-zinc-300">Rizaldy</span> and welcome to my journey as Software Engineer
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export default CenterImage;