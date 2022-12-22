import React from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = (props) => {
    let navigate=useNavigate();
    let logout=()=>{
        localStorage.removeItem('token');
        
        navigate('/signin')
    }
   
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark shadow">
                <div className="container">
                    <NavLink className="navbar-brand" to='/home'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkE3ZFWnLlBs5w-jTkkRGN-yJXdkp2Cd_lFED4iZZ1N3RWZoPWop-Thc3OwqbYPzs7xo&usqp=CAU" alt="Logo" className='rounded me-2 w-25'/>
                        <span className='me-4'>Game Over</span>
                    </NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {!props.auth ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to='/home' aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/all'>All</NavLink>
                                </li>


                                 <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Platforms</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="/pc">PC</NavLink>
                                    <NavLink className="dropdown-item" to="/browser">Browser</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort-by</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="release-date">Release-Date</NavLink>
                                    <NavLink className="dropdown-item" to="popularity">Popularity</NavLink>
                                    <NavLink className="dropdown-item" to="alphabetical">Alphabetical</NavLink>
                                    <NavLink className="dropdown-item" to="relevance">Relevance</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="racing">Racing</NavLink>
                                    <NavLink className="dropdown-item" to="sports">Sports </NavLink>
                                    <NavLink className="dropdown-item" to="social">Social</NavLink>
                                    <NavLink className="dropdown-item" to="shooter">Shooter</NavLink>
                                    <NavLink className="dropdown-item" to="open-world">Open-World</NavLink>
                                    <NavLink className="dropdown-item" to="zombie">Zombie</NavLink>
                                    <NavLink className="dropdown-item" to="fantasy">Fantasy</NavLink>
                                    <NavLink className="dropdown-item" to="action-rpg">Action-RPG</NavLink>
                                    <NavLink className="dropdown-item" to="action">Action</NavLink>
                                    <NavLink className="dropdown-item" to="flight">FLight</NavLink>
                                    <NavLink className="dropdown-item" to="battle-royale">Battle-Royal</NavLink>
                                </div>
                            </li> 
                           

                            </>  : <>

                                
                            </>}
                            </ul>

                           
                               
                                {!props.auth ? <>
                                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={logout}>Logout</button>
                                
                            </> : <>
                             <ul className="d-flex my-2 my-lg-0 align-center">
                                    <li className="nav-item me-4">
                                        <NavLink className="nav-link text-white login lin" to='/signin'>Login</NavLink>
                                    </li>
                                    <button className="btn btn-outline-info my-2 my-sm-0 lin" type="submit"><NavLink to="/signup">Join Free</NavLink></button>
                                </ul>
                                </>}
                                



                        




                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;
