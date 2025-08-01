import { Coin } from './pages/Coinpage/Coin';
import { Home } from './pages/home/home';
import { Navbar } from "./components/navbar/navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home     />}/>
      <Route path="/coin/:coinId" element={<Coin     />}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
