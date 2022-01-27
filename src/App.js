import "./index.sass";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Navigation />
        <h3>This is an exercise in using React Routing!</h3>
        <div className='body'>
        <Routes className='routes'>
          <Route  path="about" element={<About />} />
          <Route  path='home' element={<Home />} />
        </Routes>
        </div>
    
    </div>
  );
}
export default App;
