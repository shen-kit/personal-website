import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Achievements from "./pages/Achievements"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
