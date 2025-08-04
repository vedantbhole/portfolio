import React from 'react'
import {createRoot} from "react-dom/client";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import {DotPattern} from "./components/DotPattern.jsx";

export const App = () => {
    return (
        <div className="relative overflow-y-hidden">
            <DotPattern className="absolute inset-0 w-full"/>
            <div className="relaive container mx-auto max-w-7xl">
                <Navbar />
                <Hero />
                <About />
                <Projects />
            </div>

        </div>
    )
}
export default App