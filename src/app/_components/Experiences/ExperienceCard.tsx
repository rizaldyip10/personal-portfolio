import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {FC} from "react";

interface EducationCardProps {
    image: string;
    position: string;
    company: string;
    location: string;
    years: string;
}

const ExperienceCard: FC<EducationCardProps> = ({ image, position, company, location, years }) => {
    return (
        <motion.div
            initial={{y: 48, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.75, ease: "easeInOut"}}
            className="mb-9 group flex flex-col md:flex-row justify-between md:items-center gap-5 border-b border-y-zinc-800 pb-9 hover:cursor-pointer"
        >
            <div className="flex flex-col md:flex-row gap-5">
                <img src={image} className="w-40 object-contain" />
                <div className="flex flex-col gap-1 font-light">
                    <h1 className="font-bold text-2xl">{ position }</h1>
                    <h1>{ company }</h1>
                    <h1>{ location }</h1>
                    <h1>{ years }</h1>
                </div>
            </div>
            <div className="flex items-center text-zinc-300 gap-2 group-hover:text-zinc-500">
                <p>Find out more</p>
                <FaArrowRight />
            </div>
        </motion.div>
    );
};

export default ExperienceCard;