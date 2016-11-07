import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';

import { Link } from 'react-router';

var cols = [{
    name: "Task Name"
}, {
    name: "Description"
}, {
    name: "Actions"
}];

const Tasks = React.createClass({
    render: function () {
        let self = this;

        var projectId = this.props.params.projectId;
        let tableData = this.props.tasks.filter(task => task.project.id == projectId);
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

            handleResult: this.props.updateTask,
            
            //name must be equal property from data(task)            
            formFields 
        };

        let addModalSettings = {
            title: "Add Task",

            modalButtonName: "Add",

            handleResult: function(task) {
                console.log(projectId);
                self.props.addTask(projectId, task);
            },

            //name must be equal property from data(task)            
            formFields 
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
                        <button className="btn btn-danger" onClick={self.props.removeTask.bind(null, element.id)}>Remove</button>
                    </td>
                </tr>
            );
        };

        return <div className="app-content">
            <EditFormModal {...addModalSettings}/>
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} />
        </div>;
    }
});

export default Tasks;