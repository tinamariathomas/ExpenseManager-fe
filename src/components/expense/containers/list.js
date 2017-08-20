import { connect } from 'react-redux'
import ExpenseList from '../presentation/list';


const mapStateToProps = state => {
  return {
    expenses: (state.expenses)
  }
};

const mapDispatchToProps = () => {return {} };

const VisibleExpenseList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);

export default VisibleExpenseList