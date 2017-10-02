const expenses = (state = [], action) => {
      switch(action.type){
            case 'ADD_EXPENSE':
                  return Object.assign({},state, {expenses: [...state.expenses, action.expense]});
            case 'SHOW_ADD_EXPENSE_MODAL':
                  return Object.assign({},state, {showAddExpenseModal: true});
            case 'CLOSE_ADD_EXPENSE_MODAL':
                  return Object.assign({},state, {showAddExpenseModal: false});
            default:return Object.assign({},state);
      }
};

export default expenses;