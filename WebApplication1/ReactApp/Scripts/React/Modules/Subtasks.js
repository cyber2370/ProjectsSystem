import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';
import { getSubtasksAsync, 
         getSubtasksByTaskIdAsync, 
         getSubtaskByIdAsync, 
         addSubtaskAsync,
         updateSubtaskAsync,
         deleteSubtaskAsync } from '../../Api/subtasksApi';

import { Link } from 'react-router';

var cols = [{
    name: "Subtask Name"
}, {
    name: "Description"
}, {
    name: "Duration"
}, {
    name: "Actions"
}];

const Subtasks = React.createClass({
    componentWillMount: function() {
        var taskId = this.props.params.taskId;
        let callback = this.props.addSubtasks;

        getSubtasksByTaskIdAsync(taskId, callback);         
    },

    render: function () {
        let self = this;

        let taskId = this.props.params.taskId;
        let tableData = this.props.subtasks;
        let uniqIndex = (Math.random() * 1234567) ^ 0;

        let formFields = [{
                name:  'name',
                label:  'Subtask Name'
            }, {
                name:  'description',
                label:  'Description'
            }, {
                name:  'duration',
                label:  'Duration'
            }];

        let editModalSettings = {
            title: "Edit Project",

            modalButtonName: "Edit",

            handleResult: function(subtask) {
                let callback = self.props.updateSubtask;

                updateSubtaskAsync(subtask, callback);
            }, 

            //name must be equal property from data(subtask)            
            formFields
        };

        let addModalSettings = {
            title: "Add Subtask",

            modalButtonName: "Add",

            handleResult: function(subtask) {
                let callback = self.props.addSubtask;

                addSubtaskAsync(taskId, subtask, callback);
            },

            
            //name must be equal property from data(task)            
            formFields 
        };


        let handleRemoveClick = function(subtaskId) {
            let callback = self.props.removeSubtask;
            
            deleteSubtaskAsync(subtaskId, callback);
        };
        
        let tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
					<td>{element.description}</td>
                    <td>{element.duration}</td>
                    <td width="20%">
                        <ul className="list-inline">
                            <li>
                                <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                            </li>
                            <li>
                                <button className="btn btn-danger" onClick={handleRemoveClick.bind(null, element.id)}>Remove</button> 
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

export default Subtasks;