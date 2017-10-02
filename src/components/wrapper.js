import React from 'react';
import ExpenseList from './expense/containers/list';
import AddExpense from './expense/containers/addExpense';
import { Grid, Header } from 'semantic-ui-react'

export default class Wrapper extends React.Component {
  render() {
    return (<div>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as="h1"> Expense Management Tool</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            </Grid.Column>
          <Grid.Column>
            <AddExpense/>
            <ExpenseList/>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
  }
}