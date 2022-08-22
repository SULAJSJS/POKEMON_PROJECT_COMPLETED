import './App.css';
import React from 'react';
import 'macro-css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import PokemonAbilities from './pages/PokemonAbilities/PokemonAbilities';
import Help from './pages/Help/Help';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/pokemon/:id" element={<PokemonAbilities />} />
        <Route path='/help' element={<Help />}/> 
        <Route path='/contacts' element={<Contacts />}/> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
