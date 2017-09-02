import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import { Provider } from 'react-redux';
import reducers from './reducers/expense';
import { createStore } from 'redux';
const intialState = {
  expenses: [{description:'Pears', amount:'1', count:'46'}, {description:'Dove Shampoo', amount: '1', count:'180'}]
};

let store = createStore(reducers, intialState)

ReactDOM.render(<Provider store={store}>
    <Wrapper/>
  </Provider> ,
  document.getElementById('root'));