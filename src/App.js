
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import HelpPage from "./page/HelpPage";
import ReviewsPage from "./page/ReviewsPage";
import './style.css';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/reviews" element={<ReviewsPage/>} />
      </Routes>
    </Router>
  );
 

}

export default App;
