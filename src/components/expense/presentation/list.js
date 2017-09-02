import React from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class ExpenseList extends React.Component {
  render() {
    return (this.displayItems());
  }
  displayItems(){
    const data = this.props.expenses.map(expense => {
      return {
        desc: expense.description,
        amount:expense.amount,
        count:expense.count}});

    return (<BootstrapTable data={data}>
      <TableHeaderColumn isKey dataField='desc'>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
      <TableHeaderColumn dataField='count'>Count</TableHeaderColumn>
      </BootstrapTable>);
  }
}