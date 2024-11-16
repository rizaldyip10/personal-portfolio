import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";

const ProfileSummary = () => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="mb-9 w-full flex flex-col-reverse gap-10 md:flex-row justify-center items-center pb-9"
        >
            <div className="w-full md:w-[40%] flex flex-col gap-10 items-center justify-center" >
                <p className="text-lg font-light">
                    My name is <span className="font-semibold text-zinc-400">Rizaldy</span> Iman Putra and I am a bachelor degree of <span className="font-semibold text-zinc-400">Aerospace Engineering</span>.
                    I am a <span className="font-semibold text-zinc-400">Software Engineer</span>, honing my skill through one year of bootcamp at <span className="font-semibold text-zinc-400">Purwadhika Digital School</span>.
                    Currently, I am working at <span className="font-semibold text-zinc-400">Dynamics Management Solution</span> as <span className="font-semibold text-zinc-400">Full-stack Developer Intern</span>, mainly
                    responsible in developing <span className="font-semibold text-zinc-400">Backend Application</span>.
                </p>
                <Link href="/about" className="w-full flex gap-2 items-center text-zinc-400 hover:text-zinc-300 text-sm">
                    Know me deeper <FaArrowRight />
                </Link>
            </div>
            <div className="w-full md:w-[40%] flex justify-center">
                <img src={"/images/profile2.jpg"} alt="profile" className="w-80 grayscale" />
            </div>
            {/*<Link href="/about" className="order-3 flex gap-2 items-center text-zinc-400 hover:text-zinc-300 text-sm">*/}
            {/*    Know me deeper <FaArrowRight />*/}
            {/*</Link>*/}
        </motion.div>
    );
};

export default ProfileSummary;