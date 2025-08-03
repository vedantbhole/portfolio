import React from 'react'
import {createRoot} from "react-dom/client";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

export const App = () => {
    return (
        <div className="container mx-auto max-w-7xl">
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}
export default App