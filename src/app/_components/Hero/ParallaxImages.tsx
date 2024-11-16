import {ParallaxImagesData} from "@/constants/images";
import ParallaxImg from "@/app/_components/Hero/ParallaxImg";

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src="/images/parallax/parallax1.webp"
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src="/images/parallax/parallax2.webp"
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src="/images/parallax/parallax3.webp"
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="/images/parallax/parallax4.webp"
                alt="Orbiting satellite"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
            />
        </div>
    );
};

export default ParallaxImages;