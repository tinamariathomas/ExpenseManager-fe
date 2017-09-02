import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from './../../../actions/expense';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class AddExpense extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
  }
  formGroup(controlID, label, type, placeholder){
    return(
      <FormGroup controlId={controlID}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type={type}
          placeholder={placeholder}
        />
      </FormGroup>);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dispatch(addExpense({
      description: event.target.description.value,
      amount: event.target.amount.value,
      count: event.target.count.value,
    }));
    event.target.description.value = '';
    event.target.amount.value = '';
    event.target.count.value = '';
  }

  render() {
    return (<div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {this.formGroup('description', 'Description','text', 'Enter Description')}
          {this.formGroup('amount', 'Amount','text', 'Enter Description')}
          {this.formGroup('count', 'Count','text', 'Enter Count')}
            <Button type  ="submit">
              Add Expense
            </Button>
        </form>
      </div>
    );
  }
}

AddExpense = connect()(AddExpense);

export default AddExpense