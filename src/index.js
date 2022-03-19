import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store';

class _App extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <hr/>
          <hr/>
        </ul>
      </div>
    )
  }
}

const App = connect()(_App)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));