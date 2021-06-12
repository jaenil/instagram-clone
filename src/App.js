import React from 'react' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import WebcamComponent from './Components/Camera';
import View from './Components/View' ;
import NotFound from './Components/NotFound' ;

// Quota exceed error due to limited storage in localstorage .
function App() {
  return (
    <Router>
      <div className="App">
        <nav className='header'>
          <ul>
            <li>
              <Link to="/capture">Capture</Link>
            </li>
            <li>
              <Link to ='/gallery'>View</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path="/">
              
            </Route>
            <Route path='/capture' >
              <WebcamComponent />  
            </Route>
            <Route path="/gallery">
              <View />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
