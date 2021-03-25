import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./assets/searchDomain.css";

const RelatedDomain = () => {
    const className = "btn btn-outline-dark";

    var [data, setData] = useState(["Flutter", "Algorithms", "Artificial Intelligence", "Big Data", "Cryptography", "Cloud Computing", "Computer Vision",
    "Distributed Computing", "Machine Learning", "Neural Networks", "Full Stack Development"])
    var [selected, setSelected] = useState([])

    const handleButtonClick = (e) => {
            setSelected(arr => [...arr, e.target.value]);
            func(e.target.value);
    }

    const handleClose = (e) => {
        setData(arr => [...arr, e.target.name])
        let i = selected.indexOf(e.target.name)
        selected.splice(i, 1);
        setSelected(selected);
    }

    function func (val) {
        let i = data.indexOf(val);
        data.splice(i, 1);
        setData(data)
    }
    var list = data.map(function(data) {
        return <button className={className} value={data} onClick={handleButtonClick}>{data}</button>
    })

    return (
        <>
            <div className="rel card card-body search-bar">
                {list}
            </div>
            <div className="rel card card-body search-bar">
            {selected.length === 0 
                ?   <>
                        <h3 className="text-center p-3">The Selected Domain appear here</h3>
                    </>
                : <> {selected.map(function(data) {
                    return (
                        <span className="tag label label-info">
                            <span>{data}</span>
                            <a name={data} onClick={handleClose}>&#10005;</a> 
                        </span>
                        
                    )
                })}
                <Link to={`/level/${selected[0]}`} ><button className="f-right btn btn-outline-info">GO&#8594;</button></Link>
                 </> 
            }        
            </div>
        </>

    )
    
}



export default RelatedDomain;