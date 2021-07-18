import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comment from "../Comment/Comment";



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path='/'exact component={Feelings}/>
        <Route path='/2'exact component={Understanding}/>
        <Route path='/3'exact component={Support}/>
        <Route path='/4'exact component={Comment}/>
      </Router>
      
    </div>
  );
}

export default App;
