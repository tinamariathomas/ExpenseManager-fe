import React from 'react';
import ExpenseList from './expense/containers/list';
import AddExpense from './expense/containers/addExpense';

export default class Wrapper extends React.Component {
  render() {
    return (<div><AddExpense/><ExpenseList/></div>);
  }
}