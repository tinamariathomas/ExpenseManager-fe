const expenses = (state = [], action) => {
      switch(action.type){
            case 'ADD_EXPENSE':
                  return Object.assign({},state, {expenses: [...state.expenses, {description:action.data}]});
            default:return Object.assign({},state);
      }
};

export default expenses;