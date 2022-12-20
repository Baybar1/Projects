import React, {  useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from '../modules/AddChore.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';



export const AddChore = () => {

    const [chore, setChore] = useState([])
    const [choreName, setChoreName] = useState('');
    const [choreTitle, setChoreTitle] = useState('');
    const [choreDate, setChoreDate] = useState('');
    const [choreTime, setChoreTime] = useState('');
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/createChore', {
            choreName,
            choreTitle,
            choreDate,
            choreTime
        })
            .then(response => {
                console.log(response)
                setChore([...chore, response.data])
                navigate('/display')
            })
            .catch(error => {
                const errorResponse = error.response?.data.errors;
                console.log(error.response)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    return (
        <div className={styles.background}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Box sx={{ height: '100vh' }}>
                        <div className={styles.addform}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '100%',
                                        height: '70%',
                                    },
                                }}
                                className={styles.box}>
                                <Paper elevation={3} className={styles.paper}>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        {errors.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)}
                                        <input type='text' placeholder='Name' className={styles.input} onChange={(e) => { setChoreName(e.target.value) }} />
                                        <input type='textarea' placeholder='Chore' className={styles.input} onChange={(e) => { setChoreTitle(e.target.value) }} />
                                        <input type='date' className={styles.input} onChange={(e) => { setChoreDate(e.target.value) }} />
                                        <input type='time' className={styles.input} onChange={(e) => { setChoreTime(e.target.value) }} />
                                        {/* <Link to ={'/display'}><input type='button' className={styles.submit} value='Cancel'/></Link> */}
                                        <input type='button' className={styles.submit} value='Cancel' onClick={goBack} />
                                        <input type='submit' className={styles.submit} />
                                    </form>
                                </Paper>
                            </Box>
                        </div>
                        <Box sx={{ width: '100%' }}>

                        </Box>
                    </Box>

                </Container>
            </React.Fragment>


        </div>
    )
}
