import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Statistics from "./Statistics";
import "./assets/styles/index.css"
function App() {
  return (
    <div className="App" id="app">
      <Navbar/>
      <Hero/>
      <Statistics/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
