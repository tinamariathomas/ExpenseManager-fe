import React from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class ExpenseList extends React.Component {
  render() {
    return (this.displayItems());
  }
  displayItems(){
    console.log("props", this.props.expenses);
    const data = this.props.expenses.map(expense => {return {desc: expense.description}});
    console.log("data", data)

    return (<BootstrapTable data={data}>
      <TableHeaderColumn isKey dataField='desc'>Description</TableHeaderColumn>
      </BootstrapTable>);
  }
}