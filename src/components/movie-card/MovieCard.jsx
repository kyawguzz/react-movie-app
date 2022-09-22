import React from 'react'
import './movie-card.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg =  apiConfig.w500Image(item.poster_path || item.backdrop_path)
  return (
        <Link to={link}>
            <div className='movie-card' style={{ backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className='bx bx-play'></i>
                </Button>
                <div className='movie-card_info'>
                    <p className='release_date'>{item.release_date}</p>
                    <p>rating : {item.vote_average}</p>
                </div>
            </div>
            <h3>{item.title || item.name}</h3>
           
        </Link>
  )
}


export default MovieCard