import React, { Component } from 'react'
import axios from 'axios'
import spinner1 from './assets/spinner3.gif'
class CourseList extends Component {


    constructor(props) {
      super(props);
      this.state = {
        data : {},
        domain : '',
        level : ''
      }
    }
    async componentDidMount() {
      const {domain, level} = this.props.match.params;
      this.setState({...this,domain : domain, level : level})
        await axios.get(`http://localhost:4200/course/${domain}/${level}`)
        .then(response => {
          // if (response.data.code === 200) {
            var resData = response.data
            this.setState({
              data: resData
            });
            // this.setState({ permission_flag: response.data.data })
          // }
        })
        .catch(err=>{
          console.log(err)
        })
  }

  render() {
      // if (this.state.data.results) {
        return (
          <>
          <h1 style={{"textAlign" : "center", "margin" : "20px 0px", "textTransform" : "uppercase"}} className="fs-2">{this.state.domain}</h1>
          <h5 style={{"textAlign" : "center", "margin" : "20px 0px", "textTransform" : "capitalize"}}>{this.state.level}</h5>
          <div className="row">
            {this.state.data.results ? (
                      this.state.data.results.map((item, index) => (
                      // console.log(item.title) 
                      // <h1>{item.title} </h1>
                      <div className="col-3">
                        <div className="card card-body rounded-3" style={{"height": "550px"}}>
                        <div className="row">
                          <div className="">
                            <h1 className="fs-1">{index+1}</h1>
                          </div>
                          <div className="col-10">
                            <img src={item.image_125_H} alt="img"/>
                            <div className="h5 m-3">{item.title}</div>
                            <p className="m-2">{item.headline}</p>
                            <a target="_blank" href={`https://www.udemy.com${item.url}`} className="text-center" ><h6 style={{"margin": "20px 0"}} className="text-right">Check this course &#8594;</h6></a>
                          </div>
                        </div>
                      </div>
                      </div>
                      )
                )
          ) : (
           <img src={spinner1} className="m-auto" style={{"width": "200px", "height": "200px"}} alt="Loading"/>
          )}
          </div>
          </>

        
        )
      // }
    }

  }

export default CourseList;


// const CourseList = () => {

// useEffect({
//     axios.get("https://www.udemy.com/api-2.0/courses/?page=1&search=python&price=price-free"), {
//         headers: {
//           Authorization: "Token " + localStorage.getItem("token")
//         }
//       }).then(response => {
//         if (response.data.code === 200) {
//           permission = response.data.data
//           // this.setState({ permission_flag: response.data.data })
//         }
//       })
// }, [])