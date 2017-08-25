import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from './../../../actions/expense';


let AddExpense = ({dispatch}) => {
  let input;
return (<div>
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addExpense(input.value));
        input.value = ''
      }}
    >
      <input
        ref={node => {
          input = node
        }}
      />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
);
};

AddExpense = connect()(AddExpense)

export default AddExpense