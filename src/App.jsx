//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./assets/component/NetflixNavbar";
import "./assets/component/Netflix.css";
import NetflixFooter from "./assets/component/NetflixFooter";
import FilmMain from "./assets/component/FilmMain";
import { BrowserRouter,Routers,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NetflixNavbar />
<Routers>

</Routers>
<FilmMain />
      <NetflixFooter />
    </BrowserRouter>
    </>
  );
}

export default App;