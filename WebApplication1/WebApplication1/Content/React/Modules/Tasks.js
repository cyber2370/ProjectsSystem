import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';
import { getTasksAsync, 
         getTasksByProjectIdAsync, 
         getTaskByIdAsync, 
         addTaskAsync,
         updateTaskAsync,
         deleteTaskAsync } from '../../Api/tasksApi';

import { Link } from 'react-router';

var cols = [{
    name: "Task Name"
}, {
    name: "Description"
}, {
    name: "Actions"
}];

const Tasks = React.createClass({
    componentWillMount: function() {
        var projectId = this.props.params.projectId;
        let callback = this.props.addTasks;

        getTasksByProjectIdAsync(projectId, callback);         
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

            handleResult: function(task) {
                let callback = self.props.updateTask;

                updateTaskAsync(task, callback);
            }, 
            
            //name must be equal property from data(task)            
            formFields 
        };

        let addModalSettings = {
            title: "Add Task",

            modalButtonName: "Add",

            handleResult: function(task) {
                let callback = self.props.addTask;

                console.log("handleResult ADD_TASK ", projectId, task, callback);

                addTaskAsync(projectId, task, callback);
            },

            //name must be equal property from data(task)            
            formFields 
        };

        let handleRemoveClick = function(taskId) {
            let callback = self.props.removeTask;

            deleteTaskAsync(taskId, callback);
        };

        var tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td width="30%">
                        <Link to={'/tasks/' + element.id}>
                            <button className="btn btn-info">Subtasks</button>
                        </Link>
                        <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                        <button className="btn btn-danger" onClick={handleRemoveClick.bind(null, element.id)}>Remove</button>
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