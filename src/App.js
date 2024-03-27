import logo from './logo.svg';
import './App.css';
import Header from './Compoments/Header/Header';
import Category from './Compoments/Home/Categories/Category';
import SectionBg from './Compoments/Header/SectionBg';
import Footer from './Compoments/Footer/Footer'
import SpecificFood from "./Compoments/Home/Meal/SpecificFood"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from 'react';
import FoodQuality from './Compoments/Food/FoodQuality';

function App() {

  
  
  return (
   <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Category /> } />
      <Route path='/SubCategory/:category' element={<SpecificFood /> }/>
      <Route path='/Meal/:idMeal' element={<FoodQuality/> }/>
     
    </Routes>
    <Footer/>
  </Router>

   </>
  );
}

export default App;
