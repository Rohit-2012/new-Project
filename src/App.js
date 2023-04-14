import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/contact" element={<Contact />} />



          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;