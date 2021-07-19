import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';

//reducer(s)
const feelingsFeedback = (state = 0, action) => {
    if (action.type === 'ADD_FEELING_SCALE'){
        return action.payload
    } else if( action.type === 'RESET'){
        return action.payload
    }
    return state
    
}

const understandingFeedback = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING_SCALE'){
        return action.payload
    } else if( action.type === 'RESET'){
        return action.payload
    }
    return state
    
}

const supportFeedback = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT_SCALE'){
        return action.payload
    } else if( action.type === 'RESET'){
        return action.payload
    }
    return state
    
}

const commentsFeedback = (state = '', action) => {
    if (action.type === 'ADD_COMMENT'){
        return action.payload
    } else if( action.type === 'RESET'){
        return action.payload
    }
    return state
    
}


//store
let storeInstance = createStore (
    combineReducers({
        feelingsFeedback,
        understandingFeedback,
        supportFeedback,
        commentsFeedback,
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
