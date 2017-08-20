import React from 'react';
import ExpenseList from './expense/containers/list';
export default class Wrapper extends React.Component {
  render() {
    return (<ExpenseList/>);
  }
}