import './App.css';
import { BrowserRouter, Routes, Route, IndexRoute } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import HomePage2 from './pages/HomePage2';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ContentPage from './pages/ContentPage';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage2 />} />
        <Route path=":id/" element={<HomePage2 />} />
        <Route path=":id2/:id/" element={<HomePage2 />} />
        <Route path=":id3/:id2/:id/" element={<HomePage2 />} />
        <Route path="home/:id4/:id3/:id2/:id/" element={<HomePage2 />} />
        <Route path="home/:id5/:id4/:id3/:id2/:id/" element={<HomePage2 />} />
        <Route path="home/:id6/:id5/:id4/:id3/:id2/:id/" element={<HomePage2 />} />
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
