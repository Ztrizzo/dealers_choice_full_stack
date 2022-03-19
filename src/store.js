import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_COLORS = 'LOAD_COLORS';

const initialState = {
  colors: [],
  selectedColor: {}
}

export const loadColors = () => {
  
  return async(dispatch) => {
    const colors = (await axios.get('/colors')).data

    dispatch({
      type: LOAD_COLORS,
      colors
    })
  }
  
}

const reducer = (state = initialState, action) => {
  if(action.type === LOAD_COLORS){
    return{...state, colors: action.colors}
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunk));

export default store;