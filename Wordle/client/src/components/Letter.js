import React, {useContext, useEffect} from 'react'
import styles from './Letter.module.css'
import { AppContext } from '../App';

export const Letter = (props) => {
    const {letterPos, attemptVal} = props;
    const {board, correctWord, current,} = useContext(AppContext)
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
    const letterIndex = current.attempt > attemptVal && (correct ? styles.correct : almost ? styles.almost : styles.error);
    
    // useEffect(() => {
    //     if (letter !== '' && !correct && !almost) {
    //         setDisabledletters([...disabledLetters, letter])
    //     }
    // },[])
    return (
        <div className={styles.row} id = {letterIndex}>{letter}</div>
    )
}
