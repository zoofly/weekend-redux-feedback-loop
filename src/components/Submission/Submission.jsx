import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Submission() {
  const history = useHistory();

  const handleSubmit = () => {
    event.preventDefault();
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