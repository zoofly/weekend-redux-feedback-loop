import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Understanding() {

    const [understandingScale, setUnderstandingScale]= useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!understandingScale){
            alert('Please enter a number from 1-5');
        } else {
            dispatch({
                type: 'ADD_FEELING_SCALE',
                payload: {understandingScale}
            });
            
            history.push('/support');

        }
    }

    //dispatch is used to talk to redux from react
    const dispatch = useDispatch();

    //history is used to be able to change user location
    const history = useHistory();


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1> How well are you understanding the content? </h1>
                <label> Rate your understanding from 1-5 for today. </label>
                <input 
                type="number" 
                value= {understandingScale}
                onChange= {event => setUnderstandingScale(event.target.value)}
                />

                <button type="submit"> Next </button>
            </form>


        </div>

    )
}

export default Understanding;