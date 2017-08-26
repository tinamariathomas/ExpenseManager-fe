import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from './../../../actions/expense';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

class AddExpense extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
    this.state = {value: ''};
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    this.dispatch(addExpense(this.state.value))
  }

  render() {
    return (<div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter expense"
              onChange={this.handleChange.bind(this)}
            />
            <Button type="submit">
              Add Expense
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

AddExpense = connect()(AddExpense);

export default AddExpense