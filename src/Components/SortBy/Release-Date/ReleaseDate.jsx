import React from 'react';
import Item from '../../Item/Item';
import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from '../../Loading/Loading';
import { Helmet } from 'react-helmet';



const ReleaseDate = () => {


    let [Games, setGames] = useState([]);

    useEffect(() => {


        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: { 'sort-by': 'release-date' },
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
    }, [])

    console.log(Games);

    // console.log(data);
    return (
        <>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Game Over- Release date</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                
            </div>

            <div className="container">


           
                <div className="row">
                    {Games.length > 0 ? Games.slice(0, 20).map((item, index) => {
                        return <div key={index} className="col-md-3"><Item data={item} /></div>
                    }) : <Loading />}

                </div>
            </div>
        </>
    );
}

export default ReleaseDate;
