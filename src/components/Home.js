import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const Home = () => {
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        const myFunc = async () => {
            const response = await fetch('https://swapi.dev/api/films');
            const data = await response.json();
            console.log(data.results);
            setArr(data.results);
        }
        myFunc();
    }, []);
    
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Home</h1>
        <ul>
            {arr.map((item, index) => {
                return <Card key={index} 
                title={item.title}
                episode_id={item.episode_id}
                opening_crawl={item.opening_crawl}
                characters={item.characters}
                />
            })}
        </ul>
    </div>
  )
}

export default Home;