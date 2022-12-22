import React from 'react';
import { getDetails } from '../Apis/Api';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import './ItemDetails.css';


const ItemDetails = () => {
    let x=useParams();
    console.log(x.id);
    let [Game, setGame] = useState({});
    useEffect(() => {
        getDetails(setGame,x.id);
    }, [])

    console.log(Game);
    return (
        <>
           <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{Game.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4  ">
                        <div className="img-wrapper ">
                            <img src={Game.thumbnail} className="rounded-2" style={{ width: "416px" }} alt="" />
                        </div>
                        <div className="buttons mt-3">
                            <Link to="#" className="btn btn-secondary btn-sm">FREE</Link>
                            <a href={Game.game_url} target="_blank" className="play-now btn btn-primary btn-sm ms-3">Play Now <i className="fa-solid fa-right-to-bracket ps-2"></i></a>
                        </div>


                    </div>
                    <div className="col-md-8 ">
                        <h1>{Game.title}</h1>
                        <h4>About storage</h4>
                        <p className='mb-4'>{Game.description}</p>

                        <h4>Minimum System Requirements</h4>
                        {Game.minimum_system_requirements != undefined ? <>
                            <div><span className='fw-bold'>Graphics :</span>{Game.minimum_system_requirements.graphics}</div>
                            <div><span className='fw-bold'>Memory :</span>{Game.minimum_system_requirements.memory}</div>
                            <div><span className='fw-bold'>OS :</span>{Game.minimum_system_requirements.os}</div>
                            <div><span className='fw-bold'>Processor :</span>{Game.minimum_system_requirements.processor}</div>
                            <div><span className='fw-bold'>Storage :</span>{Game.minimum_system_requirements.storage}</div>

                            <h3 className='mt-4 mb-3'>{Game.title} Screenshots</h3>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {Game.screenshots.map((screenshot, index) => {
                                        return (
                                            <div className="carousel-item active" key={index}>
                                                <img className="d-block w-100" src={screenshot.image} />
                                            </div>
                                        )
                                    })}   </div>
                            </div></> : <>Graphics</>}

                            <h3 className='mt-4'>Additional Information</h3>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div>Title</div>
                                    <h6>{Game.title}</h6>
                                </div>
                                <div className="col-4">
                                    <div>Developer</div>
                                    <h6>{Game.developer}</h6>
                                </div>
                                <div className="col-4">
                                    <div>Publisher</div>
                                    <h6>{Game.publisher}</h6>
                                </div>
                            </div>
                            <div className="row mt-3 mb-5">
                                <div className="col-4">
                                    <div>Release Date</div>
                                    <h6>{Game.release_date}</h6>
                                </div>
                                <div className="col-4">
                                    <div>Genre</div>
                                    <h6>{Game.genre}</h6>
                                </div>
                                <div className="col-4">
                                    <div>Platform</div>
                                    <h6>{Game.publisher}</h6>
                                </div>
                            </div>

                
                    </div>
                </div>
            </div>



        </>
    );
}

export default ItemDetails;
