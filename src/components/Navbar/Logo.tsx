"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
    className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
    const router = useRouter();

    return (
        <div
            className="w-max h-max cursor-pointer"
            onClick={() => router.push("/")}
        >
            <Image
                alt="Logo"
                src="/images/portfolio_logo.png"
                width={36}
                height={36}
                className={`h-9 w-9 ${className}`}
            />
        </div>
    );
};

export default Logo;