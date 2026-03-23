import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/Login" element={<Login />} />
  </Routes>

}

export default App;