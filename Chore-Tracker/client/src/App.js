import './App.css';
import { useState } from 'react';
import { createContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage';
import { ChoresDisplay } from './components/ChoresDisplay';
import { AddChore } from './components/AddChore';

export const AppContext = createContext();

function App() {

  const [chore,setChore] = useState([])
  const [choreItem,setChoreItem] = useState('')
  const [choreName,setChoreName] = useState('');
  const [choreTitle,setChoreTitle] = useState('');
  const [choreDate,setChoreDate] = useState('');
  const [choreTime,setChoreTime] = useState('');

  const newChoreList = (newChore) => {
    setChore(newChore)
  }


  return (
    <div className="App">
      <AppContext.Provider value = {{chore,setChore,newChoreList,choreItem,setChoreItem, choreName,setChoreName,choreTitle,setChoreTitle,choreDate,setChoreDate,choreTime,setChoreTime}}>
      <Router>
        <Routes>
          <Route path = {'/'} element = {<Homepage />} />
          <Route path = {'/display'} element = {<ChoresDisplay />} />
          <Route path = {'/add'} element = {<AddChore />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
