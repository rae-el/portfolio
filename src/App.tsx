import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/home"
import Navbar from "./components/navbar"
import About from "./components/about"
import Work from "./components/work"
import Footer from "./components/footer"

function App() {
 

  return (
    <div className="app">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/work" element={ <Work/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
