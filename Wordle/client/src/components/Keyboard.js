import React, {useCallback, useEffect, useContext} from 'react'
import styles from './Keyboard.module.css'
import { Keys } from './Keys';
import { AppContext } from '../App';


export const Keyboard = () => {
    const {onEnter, onDelete, onLetter} = useContext(AppContext)

    const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const handleKeyboard = useCallback((e) => {
        if (e.key === 'Enter') {
            onEnter();
        } else if (e.key === 'Backspace') {
            onDelete() ;
        }else {
            keys1.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase() ) {
                    onLetter(key)
                }
            })
            keys2.forEach((key) => {
                if (e.key.toLowerCase()  === key.toLowerCase() ) {
                    onLetter(key)
                }
            })
            keys3.forEach((key) => {
                if (e.key.toLowerCase()  === key.toLowerCase() ) {
                    onLetter(key)
                }
            })
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)

        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className={styles.keyboard} onKeyDown = {handleKeyboard}>
            <div >
                {keys1.map((key) => {
                    return <Keys keyValue = {key}/>
                })}
            </div>
            <div >
            {keys2.map((key) => {
                    return <Keys keyValue = {key}/>
                })}
            </div>
            <div >
                <Keys keyValue = {'Enter'} />
            {keys3.map((key) => {
                    return <Keys keyValue = {key}/>
                })}
                <Keys keyValue = {'Delete'} />
            </div>
        </div>
    )
}
