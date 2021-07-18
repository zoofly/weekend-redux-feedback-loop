import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

function Review() {

    // const feelings = useSelector(store => store.feelingsFeedback );
    // const understanding = useSelector(store => store.understandingFeedback );
    // const support = useSelector(store => store.supportFeedback );
    // const comments = useSelector(store => store.commentsFeedback );

    const feedback = useSelector(store => store);
    
    const history = useHistory();

    //dispatch is used to talk to redux from react
    const dispatch = useDispatch();


    const handleSubmit = () => {
        event.preventDefault();
        axios.post('/feedback', feedback)
        .then( res => {
          console.log('Successfully posted feedback', res);
        
        })  .catch( error =>{
            console.log('AXIOS POST ERROR', error);
        })
      }
      

    return(
        <>
        <div>
            <h1> Review Your Feedback </h1>
            <p> Feelings: {feedback.feeling} </p>
            <p> Understanding: {feedback.understanding} </p>
            <p> Support: {feedback.support} </p>
            <p> Comments: {feedback.comments} </p>
            <button type= 'submit' onClick= {handleSubmit}> Submit Feedback </button>

        </div>
        </>

    )
}

export default Review;