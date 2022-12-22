import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import { useState } from 'react';
import { axiosPost } from '../Apis/Api';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Signin = () => {

    let [Loading, setLoading] = useState(true);
    let [ErrorMsg, setErrorMsg] = useState("");
    let navigate = useNavigate();

    let [formData, setFormData] = useState({
        email: "",
        password: "",

    })


    function getvalue({ target }) {

        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }


    async function sendData(e) {
        e.preventDefault();
        setLoading(false);
        let response = await axiosPost(formData, "signin");
        console.log(response);
        if (response.message == 'success') {
            localStorage.setItem('token', response.token);
            navigate('/home')
        } else {
            setLoading(true);
            setErrorMsg(response.errors)       }
    }





    return (
        <>
         <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Game Over- Signin</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>

            <div className="signin-body">
                <div className="container">
                    <div className="row py-5 g-0">
                        <div className="col-md-6">
                        <img src='https://blogs.brighton.ac.uk/zjgs10/files/2017/02/qmybkmtqtg88gzoyltt1-2m3j2b9.jpg' className='w-100 side-image' />
                        </div>
                        <div className="col-md-6 pt-5 forum">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkE3ZFWnLlBs5w-jTkkRGN-yJXdkp2Cd_lFED4iZZ1N3RWZoPWop-Thc3OwqbYPzs7xo&usqp=CAU" className='logo' alt="" />
                            <h3 className='text-white text-center mb-4'>Log in to GameOver</h3>
                            <form onSubmit={sendData} >

                                <input onChange={getvalue} type="email" name="email" id="email" className='form-control my-4' placeholder='Email Address' />

                                <input onChange={getvalue} type="password" name="password" id="password" className='form-control' placeholder='Password' />
                                <button type='submit' className='form-control my-4'>{Loading?"Login":<i className="fas fa-spinner fa-spin"></i>}</button>
                            </form>
                            <div className='text-center'>
                                <Link className="text-link">Forgot Password?</Link>

                            </div>
                            <p className='text-secondary text-center'>Not a member yet? <Link className="text-link" to="/signup">Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
