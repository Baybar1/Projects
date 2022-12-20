import './App.css';
import { useState } from 'react';
import { createContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage';
import { ChoresDisplay } from './components/ChoresDisplay';
import { AddChore } from './components/AddChore';

export const AppContext = createContext();

function App() {

  
 

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path = {'/'} element = {<Homepage />} />
          <Route path = {'/display'} element = {<ChoresDisplay />} />
          <Route path = {'/add'} element = {<AddChore />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
