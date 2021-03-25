import React, {useState} from 'react'
import {Link} from 'react-router-dom'
const ScoreResult = (props) => {
    var total = (props.score.q1 + props.score.q2 + props.score.q3 + props.score.q4 + props.score.q5)



    console.log(props.score)
    return (
        <div>
            <div className="card ">
                    <h4 className="card-header">
                        Your Score Out Of 50
                    </h4>
                    <div className={`card-body alert ${total <= 30 ? 'alert-danger' : 'alert-success'} `}>
                        {total < 40 ? <h2>You dont have any Luck . So Start to Study :(</h2> : <h2>Congrats</h2>}
                        <h2>{total}</h2>
                    </div>
            </div>
            {/* <div className="score_course alert alert-info">
                <h5>Now You are ready to take course</h5>
                <button className="btn btn-outline-secondary">Take Course</button>
            </div> */}
            <div className="card">
                {total <= 30 ? (
                    <div>
                        <p className="text-center fs-3">You need to start from the basics. Try to build your spark</p>
                        <Link to={`/courselist/flutter/beginner`}><div className="text-center"><a href="#" className="btn btn-outline-success btn-lg m-auto">Let's start some basics</a></div></Link>
                    </div>
                ) : (
                    <div>     
                        <p className="text-center fs-3">You are good enough to learn advanced concepts.</p>              
                        <Link to={`/courselist/flutter/intermediate`}><div className="text-center"><a href="#" className="btn btn-outline-success btn-lg m-auto">Surpass your Limits</a></div></Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ScoreResult
