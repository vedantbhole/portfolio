import React from 'react'
import HeroText from "../components/HeroText.jsx";
import ParallexBackground from "../components/ParallexBackground.jsx";
import {DotPattern} from "../components/DotPattern.jsx";

const Hero = () => {
    return (
        <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
            <HeroText/>
            {/*<ParallexBackground/>*/}
            {/*<DotPattern/>*/}
        </section>
    )
}
export default Hero
