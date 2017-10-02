import { connect } from 'react-redux'
import ExpenseModal from '../presentation/addExpenseModal';


const mapStateToProps = state => {
  return {
    show: (state.showAddExpenseModal)
  }
};

const mapDispatchToProps = () => {return {} };

const VisibleExpenseModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseModal);

export default VisibleExpenseModal;