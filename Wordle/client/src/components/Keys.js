import React, {useContext} from 'react'
import { AppContext } from '../App';
import styles from './Keys.module.css'

export const Keys = (props) => {
    const {keyValue, disabled} = props;
    const {onDelete, onLetter, onEnter, gameOver} = useContext(AppContext)

    const selectLetter = () => {
        if (gameOver.gameOver) return;
        if (keyValue === 'Enter') {
            onEnter();
        } else if (keyValue === 'Delete') {
            onDelete();
        } else {
            onLetter(keyValue);
        }
    }
    return (
        <div className={styles.keys}  onClick = {selectLetter}>{keyValue}</div>
    )
}
