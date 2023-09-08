import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/navbar';
import Index from './components/pages/index'
import MaineContentpage from './components/pages/maineContentpage';
import ProductDetails from './components/pages/ProductDetails';
import ProductCategory from './components/pages/ProductCategory'
// import ShoppingCart from './components/pages/ShoppingCart'
// import QuickProductPreview from './components/pages/QuickProductPreview'
// import LifeTimeOfferPage from './components/pages/LifeTimeOfferPage'
import About from './components/pages/About'
import SatrsPage from './components/pages/SatrsPage'
import CEOProfilePage from './components/pages/CEOProfilePage'
import NewsSectionPage from './components/pages/NewsSectionPage'
import BlogsPage from './components/pages/BlogsPage'
import ContactPage from './components/pages/ContactPage'
import TeamDescription from './components/pages/TeamDescription'
// import Login from './components/Auth/Login&OutPage';

function App() {
  return (
      // <BrowserRouter>
      <div>
        <Navbar/>
        <Index/>
        <ProductCategory/>
        <ProductDetails/>
        <MaineContentpage/>
        {/* <div>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/productCategory' element={ <ProductCategory/>}/>
          <Route path='/productDetails' element={  <ProductDetails/>}/>
          <Route path='/maineContentPage' element={  <MaineContentpage/>}/>
          <Route path='/contactPage' element={ <ContactPage/>}/>
          <Route path='/about' element={  <About/> }/>
          <Route path='/starsPage' element={ <SatrsPage/> }/>
          <Route path='/CEOProfilePage' element={ <CEOProfilePage/> }/>
          <Route path='/newsSectionPage' element={  <NewsSectionPage/> }/>
          <Route path='/blogsPage' element={ <BlogsPage/>}/>
          <Route path='/teamDescription' element={ <TeamDescription/>}/>
        </Routes>
        </div> */}
        </div>
      // </BrowserRouter>
   
  );
}

export default App;