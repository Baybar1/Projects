import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Animes = () => {
    const [anime,setAnime] = useState([])
    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/random/anime')
        .then(response => {
            setAnime(response.data.data)
        })
        .catch((error) => console.log(error))
    },[])

    const result = Object.keys(anime).map((key) => {
        return(
            anime[key]
        )
    })
    console.log(result[6])
    return (
        <div>
            
                {result[6]}
            
            
        </div>
    )
}
