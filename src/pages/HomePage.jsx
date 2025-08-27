import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default HomePage;