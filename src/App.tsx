// import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path='/testimonials' element={<Testimonials />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
