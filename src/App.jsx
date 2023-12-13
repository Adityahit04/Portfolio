import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import Project from "./Project"
import About from "./About"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import './App.css'
import ProjectDisplay from "./ProjectDisplay"

function App() {
  

  return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/project/:id" element={<ProjectDisplay/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          
        </Routes>
        <Footer/>
      </Router>
      </div>
  
    </>
  )
}

export default App
