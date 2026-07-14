import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "MERN Developer",
    ];
    return (
        <>


            <Navbar />
            <Hero />

            <About/>
            <Skills />
            <Projects />
            <Contact/>
            <Footer />
        </>

    )
}

export default Home