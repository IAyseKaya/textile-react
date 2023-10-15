import './App.css';
import Navbar from "./componentTextile/navbar/navbar.jsx";
import Footer from "./componentTextile/footer/Footer.jsx";
import MainPage from "./MainPage/MainPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return ( 
  <div
    id="body"
    >
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
