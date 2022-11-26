import React, { useContext } from 'react'
import { AppContext } from '../App'
import styles from './GameOver.module.css'

export const GameOver = () => {
    const {gameOver, setGameOver, correctWord, current} = useContext(AppContext)
    return (
        <div className={styles.finished}>
            <h3>{gameOver.guessedWord ? 'You Got it' : 'You Failed'}</h3>
            <h1>Correct : {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You Guessed in {current.attempt} attempts.</h3>)}
        </div>
    )
}
