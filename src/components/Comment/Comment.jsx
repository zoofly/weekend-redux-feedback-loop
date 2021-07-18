import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Comment() {

    const [comment, setComment]= useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
            dispatch({
                type: 'ADD_COMMENT',
                payload: {comment}
            });
            
            history.push('/review');
        }


    //dispatch is used to talk to redux from react
    const dispatch = useDispatch();

    //history is used to be able to change user location
    const history = useHistory();


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Any additional questions or comments can be left using the form below. </h1>
                <label> Comments </label>
                <input 
                type="text" 
                placeholder="Enter comment here."
                value= {comment}
                onChange= {event => setComment(event.target.value)}
                />

                <button type="submit"> Next </button>
            </form>


        </div>

    )
}

export default Comment;