
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comment from "../Comment/Comment";
import Review from "../Review/Review";
import Submission from '../Submission/Submission';


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path='/'exact component={Feelings}/>
        <Route path='/understanding' component={Understanding}/>
        <Route path='/support' component={Support}/>
        <Route path='/comment' component={Comment}/>
        <Route path='/review' component={Review}/>
        <Route path='/submission' component={Submission} />
      </Router>
      
    </div>
  );
}

export default App;
