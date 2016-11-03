import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../redux/actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
	return {
		projects: state.projects,
		tasks: state.tasks,
		subtasks: state.subtasks
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;