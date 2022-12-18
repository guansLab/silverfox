import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage2 from './pages/HomePage2';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import About from "./pages/About";
import AboutProfile from "./pages/AboutProfile";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ContentPage from './pages/ContentPage';
import TopNewsContentPage from './pages/TopNewsContent';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage2 />} />
        <Route path=":id/" element={<HomePage2 />} />
        <Route path=":id2/:id/" element={<HomePage2 />} />
        <Route path=":id3/:id2/:id/" element={<HomePage2 />} />
        <Route path=":id4/:id3/:id2/:id/" element={<HomePage2 />} />
        <Route path=":id5/:id4/:id3/:id2/:id/" element={<HomePage2 />} />
        <Route path=":id6/:id5/:id4/:id3/:id2/:id/" element={<HomePage2 />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="about/:id" element={<AboutProfile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="content/:id" element={<ContentPage />} />
        <Route path="top-news/:id" element={<TopNewsContentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
