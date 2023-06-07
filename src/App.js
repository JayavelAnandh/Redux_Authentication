import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/homePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
