// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
