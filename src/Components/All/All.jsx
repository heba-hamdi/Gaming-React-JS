import React from 'react';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { getGames } from '../Apis/Api';
import './All.css';
import Loading from '../Loading/Loading';
import {Helmet} from "react-helmet";


const All = () => {
    let [Games, setGames]=useState([]);

    useEffect(()=>{
      getGames(setGames);
      
    }, [])
    return (
      <>
       <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>All</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          
        </div>
        <div className='all  pt-4'>

      <div className="container">
  
          <div className="row">
           
          {Games.length>0?Games.slice(0, 20).map((item, index) => {
                        return <div key={index} className="col-md-3"><Item data={item} /></div>
                    }):<Loading/>}
            
          </div>
  
          </div>
  
        </div>
        </>
     
    );
}

export default All;