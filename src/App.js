import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./Songs";
import Footer from "./Footer";
import Error404 from "./404";

function App() {
  return (
    <>

    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="songs" element={<Songs/> } />
    <Route path="*" element={<Error404/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    
  );
}

export default App;
