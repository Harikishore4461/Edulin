import React, { useState } from 'react'
import './assets/sign.css'
import axios from 'axios'
import { useFormik } from 'formik'

const Sign = (props) => {

    // Button Disable
    const [disable,setDisable] = useState(true)
    // Authentication alert 
    const [alert,setAlert] = useState('')

    const [style, setstyle] = useState({
      'right': 0,
      'clipPath': 'polygon(100% 100%, 0% 100%, 20% 0%, 100% 0%)'
    })
    const [visibility, setvisibility] = useState(true)
    var x = window.matchMedia("(max-width: 600px)")
    const signup = () => {
        setstyle({
            'right': '91vh',
            'clipPath': 'polygon(100% 100%, 0% 100%, 0% 0%, 80% 0%)'
        })
        if (x.matches) {
            setvisibility(!visibility)
        }
    }
    const signin = () => {
        setstyle({
            'right': 0,
            'clipPath': 'polygon(100% 100%, 0% 100%, 20% 0%, 100% 0%)'
        })
         if (x.matches) {
            setvisibility(!visibility)
        }
    }

//SIGN IN FORM VALUES

    const initialValues = {
        email :"",
        password:"",
    }
    const validate = values =>{
        let errors = {}
        if(values.email.trim() && values.password.trim()){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
        return errors
    }
    const onSubmit = values =>{
        console.log(values)
        // Here we send user credentials for authentication
          axios
            .post("http://localhost:4200/signin", values)
            .then((res) => {
            //   console.log(res)
              props.history.push("/search");
            })
            .catch((err) => {
              console.log(err);
            });
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    const SignuponSubmit = values =>{
        console.log(values)
        // Here we send user credentials for authentication
          axios
            .post("http://localhost:4200/signup", values)
            .then((res) => {
            //   console.log(res)
              signin()
            })
            .catch((err) => {
              console.log(err);
            });
    }





    return (
        <div>
            <div className="main">
                 <div style={style} className="image">
                     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className="d-block w-100" alt="..." />
                        </div>
                         <div className="carousel-item">
                         <img src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZWR1Y2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className="d-block w-100" alt="..." />
                         </div>
                         <div className="carousel-item">
                         <img src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGVkdWNhdGlvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60' className="d-block w-100" alt="..." />
                         </div>
                     </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div> 
                <div hidden={x.matches && !visibility} className="signup">
                    <h1>SIGN IN HERE!!!</h1>
                    <form  onSubmit={formik.handleSubmit}>
                        <input {...formik.getFieldProps("email")} type="text" placeholder="Email ID"/>
                        <input {...formik.getFieldProps("password")} type="password" placeholder="Password "/>
                        <div>
                            <button type="submit" className="submit-btn">SIGN IN</button>
                        </div>
                    </form>
                    <div className="switch">
                        <h6>New User?</h6>
                        <button className="btn btn-outline-secondary" onClick={signup} >Sign Up</button>
                    </div>
                </div>


                <div hidden={x.matches && visibility} className="signin">
                    <h1>SIGN UP HERE!!!</h1>
                    <form>
                        <input  type="text" placeholder="Email ID" />
                        <input  type="password" placeholder="Password" />
                        <input  type="password" placeholder="Confirm Password" />
                        <div>
                            <button type="submit" className="submit-btn">SIGN UP</button>
                        </div>
                    </form>
                    <div className="switch">
                        <h6>Have an Account?</h6>
                        <button className="btn btn-outline-secondary" onClick={signin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign
