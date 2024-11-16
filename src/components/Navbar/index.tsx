"use client";
import Logo from "@/components/Navbar/Logo";

const Navbar = () => {
    return (
        <nav className="fixed w-full 2xl:w-[1440px] top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
            <Logo />
            <div className="flex items-center w-max gap-4">
                <button
                    onClick={() => {
                        document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-300"
                >
                    About
                </button>
                <button
                    onClick={() => {
                        document.getElementById("projects")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-300"
                >
                    Projects
                </button>
                <button
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-300"
                >
                    Contact
                </button>
                <button
                    onClick={() => window.open('https://drive.google.com/file/d/1kD9w7RFd8SDclbPxH_4GdX6azzacmAcY/view?usp=sharing', '_blank')}
                    className="flex items-center gap-1 text-xs bg-zinc-400 text-black border border-transparent rounded-md p-2 hover:bg-zinc-300 transition-colors"
                >
                    My Resume
                </button>
            </div>
        </nav>
    );
};

export default Navbar;