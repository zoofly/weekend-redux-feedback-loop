import { useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Submission() {
  const handleSubmit = (event) => {
    event.preventDefault();
        dispatch({
            type: 'ADD_FEELING_SCALE',
            payload: {feelingScale}
        });
        
        history.push('/submission');

    }
  return (
      <>
        <h1> Feedback! </h1>

        <div>
            <h2> Thank you! </h2>
            <button type='submit'> Leave New Feedback </button>
            
        </div>
            

      </>

  )
}

export default Submission;