import { useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Submission() {
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
        dispatch({
            type: 'RESET',
            payload: ''
        });
        
        history.push('/');

    }
  return (
      <>
        <h1> Feedback! </h1>

        <div>
            <h2> Thank you! </h2>
            <button type='submit' onClick= {handleSubmit}> Leave New Feedback </button>
            
        </div>
            

      </>

  )
}

export default Submission;