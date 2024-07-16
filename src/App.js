// import logo from './logo.svg';
// import './App.css';


import Banner from "./banners/banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginComponent/login";
import Register from "./RegisterComponent/Register";
import Success from "./SuccessfulComponent/success";
import Clock from "./clockComponent/clock";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/Get-Me-Therapy" element={<Banner nav={true} path="next" img="" sliders="sd1"/>}></Route>
       <Route path="/next" element={<Banner nav={true} path="next1" img="pic1" sliders="sd2"/>}></Route>
       <Route path="/next1" element={<Banner nav={false} img="pic2" sliders="sd3" progressBtn="true" />}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/success" element={<Success/>}></Route>
       <Route path="/clockScreen" element={<Clock/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
