import { Route, Routes } from 'react-router-dom';

import { Main } from "./Components/Main/Main";
import { Header } from "./Components/Header/Header";
import { SideBar } from "./Components/SideBar/SideBar";
import { Footer } from "./Components/Footer/Footer";

import "./App.css";

export const App = ()=> {

  return (
    < >

  <Routes>
    
    <Route path='/' 
    element={<> <div className="mainAndSidebarComponent"><SideBar/><div><Header/><Main/><Footer/></div></div> </>}/>

  </Routes>
   
    </>
  );
}