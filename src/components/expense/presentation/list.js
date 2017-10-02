import React from 'react';
import { Table } from 'semantic-ui-react';

export default class ExpenseList extends React.Component {
  render() {
    return (this.displayItems());
  }
  displayItems(){
    const expenses = this.props.expenses.map(expense => {
      return(
        <Table.Row>
          <Table.Cell>{expense.description}</Table.Cell>
          <Table.Cell>{expense.amount}</Table.Cell>
          <Table.Cell>{expense.count}</Table.Cell>
        </Table.Row>)});

    return(
      <Table celled>

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Count</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {expenses}
        </Table.Body>
      </Table>
        );

  }
}