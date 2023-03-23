import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
// import Alert from "./components/Alert";

function App() {
  // const [alert, setalert] = useState(null);

  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* <Alert info={alert} /> */}
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
