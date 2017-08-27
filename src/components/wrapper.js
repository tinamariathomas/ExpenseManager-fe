import React from 'react';
import ExpenseList from './expense/containers/list';
import AddExpense from './expense/containers/addExpense';
import styles from './../css/wrapper.css';

export default class Wrapper extends React.Component {
  render() {
    return (<div className={styles.wrapper}><AddExpense/><ExpenseList/></div>);
  }
}