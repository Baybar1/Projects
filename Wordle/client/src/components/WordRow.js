import React, { useState, useEffect, useContext } from 'react'
import styles from './WordRow.module.css'
import axios from 'axios'
import { Letter } from './Letter'
import { AppContext } from '../App';


export const WordRow = () => {
    const {word, setWord} = useContext(AppContext)


    

    

    return (
        <div>
            
            <div className={styles.guessColumn}>
            <div className={styles.row}>
                < Letter letterPos = {0} attemptVal = {0}/>
                < Letter letterPos = {1} attemptVal = {0}/>
                < Letter letterPos = {2} attemptVal = {0}/>
                < Letter letterPos = {3} attemptVal = {0}/>
                < Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className={styles.row}>
                < Letter letterPos = {0} attemptVal = {1}/>
                < Letter letterPos = {1} attemptVal = {1}/>
                < Letter letterPos = {2} attemptVal = {1}/>
                < Letter letterPos = {3} attemptVal = {1}/>
                < Letter letterPos = {4} attemptVal = {1}/>
            </div>
            <div className={styles.row}>
                < Letter letterPos = {0} attemptVal = {2}/>
                < Letter letterPos = {1} attemptVal = {2}/>
                < Letter letterPos = {2} attemptVal = {2}/>
                < Letter letterPos = {3} attemptVal = {2}/>
                < Letter letterPos = {4} attemptVal = {2}/>
            </div>
            <div className={styles.row}>
                < Letter letterPos = {0} attemptVal = {3}/>
                < Letter letterPos = {1} attemptVal = {3}/>
                < Letter letterPos = {2} attemptVal = {3}/>
                < Letter letterPos = {3} attemptVal = {3}/>
                < Letter letterPos = {4} attemptVal = {3}/>
            </div>
            <div className={styles.row}>
                < Letter letterPos = {0} attemptVal = {4}/>
                < Letter letterPos = {1} attemptVal = {4}/>
                < Letter letterPos = {2} attemptVal = {4}/>
                < Letter letterPos = {3} attemptVal = {4}/>
                < Letter letterPos = {4} attemptVal = {4}/>
            </div>
            </div>
        </div>
    )
}
