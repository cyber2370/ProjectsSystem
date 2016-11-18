import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';
import { Link } from 'react-router';
import * as tasksApi from '../redux/middlewares/tasks'; 
import store from '../redux/store';


var cols = [{
    name: "Task Name"
}, {
    name: "Description"
}, {
    name: "Actions"
}];

const Tasks = React.createClass({
    componentDidMount: function() {
        var projectId = this.props.params.projectId;

        store.dispatch(tasksApi.loadTasksByProjectId(projectId));        
    },

    render: function () {
        let self = this;

        var projectId = this.props.params.projectId;
        let tableData = this.props.tasks;
        let uniqIndex = (Math.random() * 1234567) ^ 0;

        let formFields = [{
                name:  'name',
                label:  'Task Name'
            }, {
                name:  'description',
                label:  'Description'
            }];

        let editModalSettings = {
            title: "Edit Task",

            modalButtonName: "Edit",

            handleResult: task => store.dispatch(tasksApi.updateTask(task)),
            
            //name must be equal property from data(task)            
            formFields 
        };

        let addModalSettings = {
            title: "Add Task",

            modalButtonName: "Add",

            handleResult: task => store.dispatch(tasksApi.uploadTask(task, projectId)),

            //name must be equal property from data(task)            
            formFields 
        };

        let handleRemoveClick = id => store.dispatch(tasksApi.removeTask(id));

        var tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td width="20%">
                        <ul  className="list-inline">
                            <li>
                                <Link to={'/tasks/' + element.id}>
                                    <button className="btn btn-info">Subtasks</button>
                                </Link>
                            </li>
                            <li>
                                <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                            </li>
                            <li>
                                <button className="btn btn-danger" onClick={() => handleRemoveClick(element.id)}>Remove</button>
                            </li>
                        </ul>
                    </td>
                </tr>
            );
        };

        return <div className="app-content">
            <EditFormModal {...addModalSettings} className="addButton"/>
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} />
        </div>;
    }
});

export default Tasks;