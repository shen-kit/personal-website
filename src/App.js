import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Achievements from './pages/Achievements.js';
import Projects from './pages/Projects.js';
// import Blog from './pages/Blog.js';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/personal-website' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/achievements' element={ <Achievements /> } />
        <Route path='/projects' element={ <Projects /> } />
        {/* <Route path='/blog' element={ <Blog /> } /> */}
      </Routes>
    </Layout>
  );
}

export default App;
