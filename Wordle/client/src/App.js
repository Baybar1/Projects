import './App.css';
import { useState, useEffect } from 'react';
import { WordRow } from './components/WordRow';
import { boardDefault, guessWord } from './components/Words';
import { createContext } from 'react';
import { Keyboard } from './components/Keyboard';
import axios from 'axios'
import { GameOver } from './components/GameOver';

export const AppContext = createContext();

function App() {
  
  
  const [board, setBoard] = useState(boardDefault)
  const [current, setCurrent] = useState({ attempt: 0, letterPos: 0 })
  const [correctWord, setCorrectWord] = useState('')
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })

  useEffect(() => {
    guessWord()
      .then((words) => {
        setWordSet(words.wordSet)
        setCorrectWord(words.answerWord)
        console.log(words)
      }
      )
  }, [])

  const onLetter = (keyValue) => {
    if (current.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[current.attempt][current.letterPos] = keyValue;
    setBoard(newBoard);
    setCurrent({ ...current, letterPos: current.letterPos + 1 })
  }

  const onDelete = () => {
    if (current.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[current.attempt][current.letterPos - 1] = '';
    setBoard(newBoard)
    setCurrent({ ...current, letterPos: current.letterPos - 1 })
  }

  const onEnter = () => {
    if (current.letterPos !== 5) return;
    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[current.attempt][i]
    }
    setCurrent({ attempt: current.attempt + 1, letterPos: 0 })
    console.log(currWord, correctWord)
    console.log(currWord.toLowerCase(), correctWord.toLowerCase())
    
    if (currWord.toLowerCase().trim() === correctWord.toLowerCase().trim()) {
      console.log('there')
      setGameOver({gameOver: true, guessedWord: true})
      return;
    } else {
      console.log(currWord.toLowerCase())
      console.log('here')
    };

    if (current.attempt === 4) {
      setGameOver({gameOver: true, guessedWord: false})
    }
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, current, setCurrent, onDelete, onEnter, onLetter, correctWord, setDisabledLetters, disabledLetters, gameOver, setGameOver}}>
        <WordRow />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
