import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import Colors from './Colors';
import store from './store';

class _App extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <Colors/>
        </ul>
      </div>
    )
  }
}



const App = connect(state => state)(_App)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));