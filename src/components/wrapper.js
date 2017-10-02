import React from 'react';
import ExpenseList from './expense/containers/list';
import AddExpenseButton from './expense/containers/addExpenseButton';
import AddExpenseModal from './expense/containers/addExpenseModal';
import { Grid, Header, Button } from 'semantic-ui-react'

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
            <AddExpenseButton/>
            <AddExpenseModal/>
            <ExpenseList/>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
  }
}