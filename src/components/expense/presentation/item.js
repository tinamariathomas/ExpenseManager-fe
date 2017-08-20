import React from 'react';

export default class ExpenseItem extends React.Component {
  render() {
   return (<li>{this.props.text}</li>);
  }
}