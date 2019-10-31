import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Login from './pages/Login';
import PostCourse from './pages/PostCourse';
import Home from './pages/Home';
import Signup from './pages/Signup';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>         
        
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">CoursePoint</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">     
        <NavLink to="/login" className="nav-link">Log in</NavLink>
      </li>
      <li className="nav-item">
      <NavLink role="button" aria-pressed="true" to="/signup" className="btn btn-outline-primary">Post Course</NavLink>
      {/* <button type="button" class="btn btn-outline-primary"><Link to="/postcourse" >Post Course</Link></button> */}
        {/* <a className="nav-link" href="#"><Link to="/postcourse" >Post Course</Link></a> */}
      </li>

    </ul>
  
  </div>
</nav>
 
            <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

// export default App;