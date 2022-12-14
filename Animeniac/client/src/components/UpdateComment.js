import React, {useState, useEffect} from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './Comments.module.css'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export const UpdateComment = () => {
    const [comment, setComment] = useState('')
    // const [updatedComment,setUpdatedComment] = useState()
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/comments/${id}`)
            .then(response => {
                console.log(response)
                setComment(response.data)
            })
            .catch(error => console.log(error, 'didnt get it'))
    }
    ,[])

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/comments/${id}`, {
            comment
        })
        .then((response) => {
            console.log(response)
            navigate(-1)
        })
        .catch(error => {
            console.log(error)
            const errorResponse = error.response.data.errors;
                console.log(errorResponse)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
        })
    }

    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    console.log(comment)

    return (
        <div className={styles.comments}>
            <Button variant = 'contained' onClick={goBack} >{<CloseIcon />}</Button>
            {errors.map((error, index) => <p key={index} style={{ color: 'red' }} >{error}</p>)}
            <input type = 'text'  value = {comment.comment} onChange = {(e) => setComment(e.target.value)} className={styles.editBox}/>
            <Button variant = 'contained' onClick={handleEdit}>edit</Button>
        </div>
    )
}
