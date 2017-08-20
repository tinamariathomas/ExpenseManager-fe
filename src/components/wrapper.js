import React from 'react';
import ExpenseList from './expense/list';
const expenses = [{description:'hi'}, {description:'hee'}];
export default class Wrapper extends React.Component {
  render() {
    return (<ExpenseList expenses={expenses}/>);
  }
}