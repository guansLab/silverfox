import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ContentPage from './pages/ContentPage';
import { Fragment } from 'react';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home/" element={<Homepage home={true}/>} />
        <Route path="home/:id" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
          <Route path="resources" element={<Resources />} />
          <Route path="about" element={<About />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="content/:id" element={<ContentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
