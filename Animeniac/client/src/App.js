import './App.css';
import { Homepage } from './components/Homepage';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Profile } from './components/Profile';
import { Animes } from './components/Animes';
import { Videos } from './components/Videos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = '/' element = {<Homepage />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/animes' element = {<Animes />} />
      <Route path = '/videos' element = {<Videos />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
