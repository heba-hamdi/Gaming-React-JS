import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useState } from 'react';
import { axiosPost } from '../Apis/Api';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Signup = () => {
    let [Loading, setLoading]=useState(true);
    let [ErrorMsg, setErrorMsg]=useState("");
    let navigate=useNavigate();

    let [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: ""
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
        let response= await axiosPost(formData, "signup");
        console.log(response);
        if(response.message=='success'){
            navigate('/signin')
          }else{
            setLoading (true);
            setErrorMsg(response.errors)
          }
    }



    return (
        <>
         <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Game Over -Signup</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          
        </div>

            <div className="signup-body">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6 image">
                            <img src='https://blogs.brighton.ac.uk/zjgs10/files/2017/02/qmybkmtqtg88gzoyltt1-2m3j2b9.jpg' className='w-100 side-img' />
                        </div>
                        <div className="col-md-6  forum">
                            <h4 className='text-white text-center  my-4'>Create My Account!</h4>
                            <form onSubmit={sendData}>
                                <div className="d-flex ">
                                    <input onChange={getvalue} type="text" className='form-control me-2' placeholder='First Name' name='first_name' />
                                    <input onChange={getvalue} type="text" className='form-control ms-2' placeholder='Last Name' name='last_name' />
                                </div>
                                <input onChange={getvalue} type="email" name="email" id="email" className='form-control my-3' placeholder='Email Address' />
                                {ErrorMsg?<div className="alert alert-danger p-1">{ErrorMsg?.email?.message}</div>:""}
                                <input onChange={getvalue} type="number" name="age" id="age" className='form-control my-3' placeholder='Age' />
                                <input onChange={getvalue} type="password" name="password" id="password" className='form-control' placeholder='Password' />
                                <button type='submit' className='form-control my-3'>{Loading?"Create Account":<i className="fas fa-spinner fa-spin"></i>}</button>
                            </form>
                            <p className="text-secondary para text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
                            <p className='text-secondary text-center'>Already a member? <Link className='text-link' to="/signin">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
