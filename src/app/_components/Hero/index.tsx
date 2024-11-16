import CenterImage from "@/app/_components/Hero/CenterImage";
import ParallaxImages from "@/app/_components/Hero/ParallaxImages";

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            className="relative w-full"
            style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`}}
        >
            <CenterImage sectionHeight={SECTION_HEIGHT}/>
            <ParallaxImages/>
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950"/>
        </div>
    );
};

export default Hero;