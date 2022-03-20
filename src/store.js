import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_COLORS = 'LOAD_COLORS';
const ADD_FAVORITE = 'ADD_FAVOROTE';
const NEW_COLOR = 'NEW_COLOR';
const DELETE = 'DELETE';

const initialState = {
  colors: []
}

export const deleteColor = (id) => {
  return async(dispatch) => {
    await axios.delete(`/color/${id}`);
    const colors = (await axios.get('/colors')).data;

    dispatch({
      type: DELETE,
      colors
    })

  }
}

export const newColor = (name, history) => {
  return async(dispatch) => {
    const newColor = (await axios.post(`/color`, {name})).data;
    const colors = (await axios.get('/colors')).data;

    dispatch({
      type: NEW_COLOR,
      colors

    })
    history.push(`/color/${newColor.id}`);
  }
}

export const addFavorite = (id) => {
  return async(dispatch) => {
    await axios.put(`/color/${id}`)
    const colors = (await axios.get('/colors')).data

    dispatch({
      type: ADD_FAVORITE,
      colors
    })
  }
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
  else if(action.type === ADD_FAVORITE){
    return{...state, colors: action.colors}
  }
  else if(action.type === NEW_COLOR){
    return {...state, colors: action.colors}
  }
  else if(action.type === DELETE){
    return {...state, colors: action.colors}
  }
  else
    return state;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunk));

export default store;