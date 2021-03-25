import React, {useRef} from "react";
import './assets/searchDomain.css'
import './assets/style.css'
import RelatedDomain from "./relatedDomain";

const Search = (props) => {
    // const [search, setsearch] = useState("")
    const search = useRef(null);
    console.log("")
    return (
        <div className="container-fluid">
            <div className="search-bar rounded-3">
                    <form className="d-flex">
                        <input  ref={search} className="form-control me-2 search-field " style={{"border": "none", "font-size": "large"}} type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={()=>{props.history.push(`/level/${search.current.value}`)}} className="btn btn-primary btn-lg">Search </button>
                    </form>
            </div>
            <>
                <RelatedDomain />
            </>
        </div>
    )
}

export default Search;

