import React from 'react';
// import  {  Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Mains from './components/Main'

function App() {
  return (
<div>
  <Header /> 
  <Mains /> 
<Footer /> 

</div>
    
  );
}

export default App;
