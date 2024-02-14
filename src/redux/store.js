import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'

const initialState = {
    weatherData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                weatherData: action.payload,
            };
        default:
            return state;

    }
};

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(reducer, undefined, composedEnhancers)

export default store;