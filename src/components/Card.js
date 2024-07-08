import React from 'react';

const Card = (props) => {
    const {title,episode_id, opening_crawl, characters} = props
  return (
        <li>
        <div style={{display:'inline-block', textAlign:'center', width:'400px', height: '600 px', border:'1px solid black', marginBottom:'10px'}}>
        <h3>{title}</h3>
        <img width='200px' height='300px' src='/images/john-wick.jpg' />
        <img width='200px' height='300px' src='/images/shawshank.jpg' />
        <p>episode id: {episode_id}</p>
        <p>{opening_crawl}</p>
        </div>
        </li>
  )
}

export default Card;