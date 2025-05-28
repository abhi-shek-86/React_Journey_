import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import './index.css';


function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
      
    </BrowserRouter>
    
    

  )
}

export default App;