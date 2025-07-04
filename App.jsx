import "./App.css";
import Gallery from "./pages/Gallery";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/gallery" index element={<Gallery/>}/>
          <Route path="/services" index element={<Services/>}/>
          <Route path="/contact" index element={<Contact/>}/>
          <Route path="/about" index element={<About/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
