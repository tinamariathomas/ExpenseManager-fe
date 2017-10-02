import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react';

import {closeAddExpenseModal} from './../../../actions/expenseModal';

class CloseExpenseModalButton extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    this.dispatch(closeAddExpenseModal());
  }
  render(){
    return(<Button onClick={this.handleSubmit}>Close</Button>);
  }
}

CloseExpenseModalButton = connect()(CloseExpenseModalButton);

export default CloseExpenseModalButton;