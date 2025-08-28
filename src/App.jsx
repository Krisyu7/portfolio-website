import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import ProjectPage1 from './pages/ProjectPage1';
import Project1Page from "./pages/Project1Page.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage1 />} />
                    <Route path="/projects/electronics-store" element={<Project1Page />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;