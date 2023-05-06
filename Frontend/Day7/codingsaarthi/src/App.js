import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Post from "./Components/Post/Post";
import SinglePost from "./Components/Post/SinglePost";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/post/:id" element={<SinglePost />} />
          <Route exact path="/" element={<Signup />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
