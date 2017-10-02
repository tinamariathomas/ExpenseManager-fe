import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'

import { addExpense } from './../../../actions/expense';

class AddExpense extends React.Component {
  constructor({dispatch}) {
    super();
    this.dispatch = dispatch;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, data) {
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
        <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="Enter Description" name="description"/>
            <Form.Input placeholder="Enter Amount" name="amount"/>
            <Form.Input placeholder="Enter Count" name="count"/>

            <Form.Button content='Submit'></Form.Button>
        </Form>
      </div>
    );
  }
}

AddExpense = connect()(AddExpense);

export default AddExpense