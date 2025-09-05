import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import TicktodoPage from './pages/Ticktodo-page.jsx';
import ElectronicsStore from "./pages/electronics-store.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<TicktodoPage />} />
                    <Route path="/projects/electronics-store" element={<ElectronicsStore />} />
                    <Route path="/projects/ticktodo-app" element={<TicktodoPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;