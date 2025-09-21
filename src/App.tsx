import './App.css'

// React imports
import { useState, useEffect } from 'react';

// Component imports
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx'
import Contact from './components/Contact.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';

// Experience image imports
import AcmLogo from './assets/experiences/acm-logo.png';

// Project image imports
import ParticleImage from './assets/projects/particle.png';
import MealmapImage from './assets/projects/mealmap.png';
import CRaysImage from './assets/projects/c-rays.png';
import TimeImage from './assets/projects/time-quizzer.png';



// Here are some links to svgs you can use!
// https://devicon.dev/ https://techicons.dev/
// Just search for the language/framework you want and copy the link.



export default function App() {
    const [activeSection, setActiveSection] = useState('hero');

    // Here are examples of experience metadata, try changing them and adding your own projects!
    const experiences = [
        {
            name: "Software Engineer Intern",
            company: "Company name here",
            link: "https://google.com/",
            desc: "cool description or something",
            technologies: [
                { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "Java", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
            ],
            image: AcmLogo
        },

        {
            name: "Software Engineer Intern",
            company: "Company name here",
            link: "https://google.com/",
            desc: "cool description or something",
            technologies: [
                { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "Java", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
            ],
            image: AcmLogo
        },

        {
            name: "Software Engineer Intern",
            company: "Company name here",
            link: "https://google.com/",
            desc: "cool description or something",
            technologies: [
                { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "Java", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
            ],
            image: AcmLogo
        },
    ];

    // Here are examples of project metadata, try changing them and adding your own projects!
    const projects = [
        {name:"Particle", image:ParticleImage, link:"https://particle-life-js.vercel.app/", desc:"Simulation for visualizing attraction and repulsion interactions between several thousand particles", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        ]},
        {name:"Meal Map", image:MealmapImage, link:"https://amealmap.vercel.app/", desc:"A website for tracking ingredients for meals so you can grocery shop without forgetting about ingredients", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        ]},
        {name:"C-Rays", image:CRaysImage, link:"https://github.com/carrotlemon/C-rays", desc:"Simple 2d ray tracer", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        ]},
        {name:"TimeQuizzer", image:TimeImage, link:"https://github.com/carrotlemon/TimeQuizzer", desc:"A clock reading practice desktop application", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
        ]},
    ];

    // useEffect is a React hook that has 3 functions
    // 1. runs the body code on initialization of the component
    // 2. runs the body code whenever one of the argument variables are updated
    // 3. if you return a function inside of a useEffect, it will run that function when the component deletion (unloading)
    useEffect(() => {
        // Detect which section the user is scrolled into so that the section can be highlighted on the navbar
        const handleScroll = () => {
            const sections = ['hero', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                    if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        // add a listener to constantly check which section the user is scrolled on
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []); // <-- this [] is the argument containing the variables that would call useEffect on value modification
    // since it is empty in this case, this useEffect only runs on component initialization

    // function used to scroll to different sections of the website using the navigation bar
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    // return the html of the component
    return (
        <div className="flex-col bg-[#F7FCFE]">
            
            
            {/* Navigation Bar */}
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />


            {/* Hero Section */}
            <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
                <Hero scrollToSection={scrollToSection} />
            </section>
            
            
            {/* Experience */}
            <section id="experience" className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Experience
                        </h2>
                    </div>
                    
                    <div className="flex justify-center gap-8">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Projects */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Projects
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact */}
            <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
                <Contact />
            </section>


        </div>
    )
}
