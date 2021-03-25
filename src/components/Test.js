import React, { useState } from 'react'
import './assets/assess.css'
import { Flutter_quiz } from './Quiz/Flutter_quiz'
// import ScoreResult from './ScoreResult'


const Test = (props) => {

    const [Score, setScore] = useState({})
    const [disable, setdisable] = useState(true)
    
    const handleChange = e => {
        const {name , value} = e.target
        setScore({...Score, [name] : parseInt(value)})
        if(name === 'q5') {
            setdisable(false)
        }
    }
    const evaluate = () => {
        props.set(Score)
        props.history.push('/score')
    }
 return (
        <div>
            <div className="card assess-card">
                <h5 className="card-title assess-title">
                    Flutter Quiz Assessment
                </h5>
                <div className="card-body">
                    <h6>Mark : 50</h6>
                    <h6>No.of Question : 05</h6>
                </div>
            </div>

            {Flutter_quiz.map((data, key) => {
                return (
                    <div key={key} className="ans-card card">
                        <h5 className="card-title">
                            {data.questionText}
                        </h5>
                        <div className="card-body">
                            <form>
                                {data.answers.map((ans, key)=>{
                                    return(
                                    <div className="options_con" key={key}>
                                        <input className="options" onChange={handleChange} type="radio" id={ans.text} name={data.question} value={ans.score} />
                                        <label for="age1">{ans.text}</label>
                                    </div>
                                    )
                                })}
                            </form>
                        </div>
                    </div>
                )
            })}
        <div className="submit_btn">
            <button onClick={evaluate} disabled={disable} className="btn btn-success">Submit</button>
        </div>
        </div>
    )
}

export default Test
