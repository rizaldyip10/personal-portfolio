import {FiMapPin} from "react-icons/fi";
import Link from "next/link";
import {IoMdMail} from "react-icons/io";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <footer className="w-full 2xl:w-[1440px] flex flex-col gap-5 md:flex-row items-center justify-between px-6 pt-3 pb-10 text-white">
            <Logo className="h-10 w-10"/>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1>&#169; Rizaldy Iman Putra</h1>
                <div className="flex items-center gap-2">
                    <FiMapPin/>
                    <h1>Bogor, West Java Indonesia</h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Link href="mailto:rizaldyimanputra@gmail.com">
                    <IoMdMail/>
                </Link>
                <Link href="https://www.github.com/rizaldyip10">
                    <FaGithub/>
                </Link>
                <Link href="https://www.linkedin.com/in/rizaldy-iman-putra-a17b0317a/">
                    <FaLinkedin/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;