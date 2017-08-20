import React from 'react';
import ExpenseItem from './item';

export default class ExpenseList extends React.Component {
  render() {
    return (this.displayItems());
  }
  displayItems(){
    const items = this.props.expenses.map(expense => <ExpenseItem text={expense.description}/>);
    return <ul>{items}</ul>;
  }
}