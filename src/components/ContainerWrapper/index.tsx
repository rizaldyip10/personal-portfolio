import {FC, ReactNode} from "react";
import Navbar from "@/components/Navbar";

interface ContainerWrapperProps {
    children: ReactNode;
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex items-start justify-center">
            <div className="w-full 2xl:w-[1440px] relative">
                <Navbar />
                <div className="w-full px-6">
                    { children }
                </div>
            </div>
        </div>
    );
};

export default ContainerWrapper;