// App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Blogs from "./pages/blogs";
 
function App() {
    return (
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route path="/blogs" element={<Blogs />} />
                </Routes>
        </Router>
    );
}

export default App;