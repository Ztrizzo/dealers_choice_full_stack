import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import Colors from './Colors';
import Nav from './Nav';
import store from './store';
import {HashRouter as Router, Route} from 'react-router-dom';

class _App extends React.Component{
  render(){
    return(
      <div>
        <Route path='/' component={Nav}/>
        <Route path='/colors' component={Colors}/>
      </div>
    )
  }
}



const App = connect(state => state)(_App)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.querySelector('#root'));