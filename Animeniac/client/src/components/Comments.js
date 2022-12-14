import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import styles from './Comments.module.css'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const Comments = () => {
    const [oneAnime, setOneAnime] = useState({})
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    const animeId = id

    useEffect(() => {
        axios.get(`http://localhost:8000/api/anime/${id}`)
            .then(response => {
                console.log(response.data)
                setOneAnime(response.data)
            })
            .catch(error => console.log(error, 'didnt get it'))

        axios.get(`http://localhost:8000/api/comments/anime/${id}`)
            .then(response => {
                console.log(response.data)
                setComments(response.data)
            })
            .catch(error => console.log(error, 'didnt get it'))

    }, [])



    const addComment = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/comments`, {
            comment,
            animeId
        })
            .then(response => {
                console.log(response.data)
                setComments([...comments, response.data])
                setComment('')
            })
            .catch(error => {
                console.log(error, 'failed')
                const errorResponse = error.response.data.errors;
                console.log(errorResponse)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    const removeComment = commentId => {
        setComments(comments.filter(comment => comment._id !== commentId));
    }

    const deleteComment = (commentId) => {
        axios.delete('http://127.0.0.1:8000/api/comments/' + commentId)
            .then(res => {
                console.log(res)
                removeComment(commentId)
            })
            .catch((err) => console.log(err))
    }

    
    return (
        <div className={styles.container}>
            <Link to={'/animes'} className={styles.goBack}> <ArrowBackIcon />Animes</Link>
            <h1>{oneAnime.anime}</h1>

            {
                comments.map((comment, index) => {
                    return (
                        <div key={index} className={styles.comments}>
                            <p>{comment.comment}</p>
                            <div>
                            <Link to={'/comments/' + comment._id}><Button variant = 'contained'><EditIcon /></Button></Link>
                            <Button variant = 'contained' onClick={(e) => deleteComment(comment._id)}><DeleteIcon /></Button>
                            </div>
                        </div>

                    )
                })
            }
            <form onSubmit={addComment} className={styles.addButton}>
                <p>
                    {errors.map((error, index) => <p key={index} style={{ color: 'red' }} >{error}</p>)}
                    <input type='text'  value = {comment} onChange={(e) => setComment(e.target.value)} placeholder='Comment..' className={styles.editBox}></input>
                    
                </p>
                <Button variant = 'contained' onClick={addComment} startIcon={<AddBoxIcon />}>Add Comment</Button>
            </form>
        </div>
    )
}
