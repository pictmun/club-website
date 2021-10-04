import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
