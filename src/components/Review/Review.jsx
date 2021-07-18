import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

function Review() {

    const reviewFeedback = useSelector(store => store );
    
    const history = useHistory();

    //dispatch is used to talk to redux from react
    const dispatch = useDispatch();

    

    useEffect(() => {
        getFeedback();
      }, []);
      
      
      const getFeedback = () => {
        axios.post('/')
        .then( res => {
          console.log('Successfully posted feedback', res);
        
        })  .catch( error =>{
            console.log('AXIOS POST ERROR', error);
        })
      }
      

    return(
        <div>
            <h1> Review Your Feedback </h1>
            <p> Feelings: {reviewFeedback.feelings} </p>
            <p> Understanding: {reviewFeedback.understanding} </p>
            <p> Support: {reviewFeedback.support} </p>
            <p> Comments: {reviewFeedback.comment} </p>
        

        </div>

    )
}

export default Review;