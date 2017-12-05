import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import { Provider } from 'react-redux';
import reducers from './reducers/expense';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import Summary from './components/summary';
const intialState = {
  expenses: [
    {description:'Pears', amount:'1', count:'46'}, {description:'Dove Shampoo', amount: '1', count:'180'}
  ],
  showAddExpenseModal: false,
};

let store = createStore(reducers, intialState)

ReactDOM.render(<Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Wrapper} />
        <Route path='/summary' component={Summary}/>
      </Switch>
    </Router>
  </Provider> ,
  document.getElementById('root'));