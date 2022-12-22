import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    let { thumbnail, title ,id } = props.data

    return (
        <>

            <Link to={`/details/${id}`}>
                <div className="card" >
                    <img src={thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title">{title.split(" ").slice(0, 3).join(" ")}</h5>
                        <Link to={`/${id}`} className="btn btn-success btn-sm">FREE</Link>
                    </div>
                </div>
            </Link>

        </>
    );
}

export default Item;
