import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Review(getFeedback) {

    const [feelingScale, setFeelingScale]= useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!feelingScale){
            alert('Please enter a number from 1-5');
        } else {
            dispatch({
                type: 'ADD_FEELING_SCALE',
                payload: {feelingScale}
            });
            
            history.push('/understanding');

        }
    }

    //dispatch is used to talk to redux from react
    const dispatch = useDispatch();


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Rate your feelings from 1-5 for today. </label>
                <input 
                type="number" 
                placeholder="Please rate between 1-5. 5 being good and 1 being bad."
                value= {feelingScale}
                onChange= {event => setFeelingScale(event.target.value)}
                />

                <button type="submit"> Next </button>
            </form>


        </div>

    )
}

export default Review;