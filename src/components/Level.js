import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './assets/level.css'
// import Navbar from './Navbar'

const Level = () => {

    let { domain } = useParams()
    return (
        <div>
            <header>Let Us Know About Your Efficiency Level in {domain}!!</header>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Beginner</h5>
                    <p className="card-text">New to the domain , start from basics and fundamentals </p>
                    <Link to={`/courselist/${domain}/beginner`}><a href="#" className="btn btn-outline-success">Let's Start</a></Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Intermediate</h5>
                    <p className="card-text">Sommewhat know little bit or brush up the knowledge on the domain. Suggested to take assessment first</p>
                    <Link to={`/courselist/${domain}/intermediate`}><a href="#" className="btn btn-outline-success">Let's Start</a></Link>
                </div>
            </div>
            <h2>Quick Assessment</h2>
            <div className="card ev-card">
                <div className="card-body">
                    <h5 className="card-title">Evaluate Yourself</h5>
                    <p className="card-text">Let's evaluate yourself if you somewhat know about basics and fundamentals</p>
                    <Link to="/assess">
                      <a href="#" className="btn btn-outline-primary">Take Test</a>
                    </Link>
                </div>
            </div>
        </div>  
    )
}

export default Level
