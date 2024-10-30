import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './components/Header/Header';
import Section from './components/Section/Section'; // Example component
import Services from './components/Services/Services'; // Replace with your actual Services component
import Contact from './components/Section/Section'; // Replace with your actual Contact component
import SignUp from './components/Auth/SignUp'; // Replace with your actual SignUp component
import SignIn from './components/Auth/SignIn'; // Replace with your actual SignIn component
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Section />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
