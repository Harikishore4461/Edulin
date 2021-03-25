import React , { useState } from 'react'
import Sign from './components/Sign';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Level from './components/Level';
import Navbar from './components/Navbar';
import Test from './components/Test';
import ScoreResult from './components/ScoreResult';
import Search from './components/search';
import CourseList from './components/courseList';


function App() {

  const [score, setscore] = useState({})

  const set = (score) => {
    setscore(score)
    console.log(score)
  }

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path='/' component={Sign} />
          <Route  exact path='/search' component={Search}/>
          <Route exact path='/level/:domain' component={Level} />
          <Route exact  path='/assess' component={
            (props)=>(
              <Test
              set = 
              {(e) => 
                {set(e);
                }}
                {...props}
              />
            )} 
          />
          <Route exact  path='/score' score = {score} component={
            (props) => (
              <ScoreResult 
                score = {score}
                {...props}
              />
            )
          } />
          <Route exact path='/courselist/:domain/:level' component={CourseList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
