import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from './../../../actions/expense';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class AddExpense extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dispatch(addExpense(event.target.description.value));
    event.target.description.value = '';
  }

  render() {
    return (<div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter expense"
            />
          </FormGroup>
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