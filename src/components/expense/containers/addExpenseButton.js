import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react';

import {showAddExpenseModal} from './../../../actions/expenseModal';

class AddExpenseButton extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    this.dispatch(showAddExpenseModal());
  }
  render(){
    return(<Button onClick={this.handleSubmit}>Add New Expense</Button>);
  }
}

AddExpenseButton = connect()(AddExpenseButton);

export default AddExpenseButton;