import React from 'react';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import {Helmet} from "react-helmet";



const Home = () => {

  let [Games, setGames] = useState([]);
  useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { 'sort-by': 'popularity' },
        headers: {
            'X-RapidAPI-Key': 'c573d05034msh6504006fe3dfe62p1dafddjsn86270a973a52',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setGames(response.data)
    }).catch(function (error) {
        console.error(error);
    });
  },[])

  console.log(Games)

  return (

    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

      <section className='mb-5 p-5'>
        <h1>Find & track the best <span className='primary'>free-to-play </span>games!</h1>
        <p className='text-secondary lead'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link to="/all"><button className='btn btn-outline-secondary'>Browse Games</button></Link>
      </section>


      <div className="container">


        <div className="recommend-title d-flex">
          <i className="fa-solid fa-robot fa-2xl me-2"></i>
          <h3 className='pb-3'>Personalized Recommendations</h3>
        </div>

        <div className="row">
         
            {Games.length>0?Games.slice(0, 3).map((item, index) => {
              return  <div  key={index} className="col-md-4"><Item data={item} /></div>
            }):<Loading/>}
          
        </div>



      </div>

    </div>
  );
}

export default Home;
