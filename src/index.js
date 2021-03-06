import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import Colors from './Colors';
import Color from './Color';
import Nav from './Nav';
import store from './store';
import Create from './Create';
import {HashRouter as Router, Route} from 'react-router-dom';
import { loadColors } from './store';

class _App extends React.Component{

  componentDidMount(){
    this.props.loadColors();
  }

  render(){
    return(
      <div>
        <h1>Colors</h1>
        <Route path='/' component={Nav}/>
        <Route exact path='/colors' component={Colors}/>
        <Route path='/color/:id' component={Color}/>
        <Route path='/colors/favorites' component={Colors}/>
        <Route path='/colors/nonfavorites' component={Colors}/>
        <Route path='/create' component={Create}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadColors: function(){
      dispatch(loadColors());
    }
  }
}



const App = connect(state => state, mapDispatchToProps)(_App)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.querySelector('#root'));