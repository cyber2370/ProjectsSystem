import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import actionCreators from '../redux/actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
	return {
		projects: state.projects,
		tasks: state.tasks,
		subtasks: state.subtasks
	};
}
const App = connect(mapStateToProps)(Main);

export default App;