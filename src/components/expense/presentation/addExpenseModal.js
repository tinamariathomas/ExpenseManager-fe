import React from 'react';
import {Modal, Button} from 'semantic-ui-react';
import CloseModalButton from './../containers/closeExpenseModalButton';
import AddExpenseForm from './../containers/addExpense';

export default class AddExpenseModal extends React.Component {
  render() {
    return (
      <Modal open={this.props.show}>
        <Modal.Header>Add New Expense</Modal.Header>
        <Modal.Content>Time to Add a new Expense</Modal.Content>
        <Modal.Actions>
          <AddExpenseForm/>
          <CloseModalButton/>
        </Modal.Actions>
      </Modal>);
  }
  }