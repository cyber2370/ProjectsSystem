import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';
import * as subtasksApi from '../redux/middlewares/subtasks'; 
import store from '../redux/store';

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
    componentDidMount: function() {
        var taskId = this.props.params.taskId;

        store.dispatch(subtasksApi.loadSubtasksByTaskIdAsync(taskId));      
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

            handleResult: subtask => store.dispatch(subtasksApi.updateSubtask(subtask)),

            //name must be equal property from data(subtask)            
            formFields
        };

        let addModalSettings = {
            title: "Add Subtask",

            modalButtonName: "Add",

            handleResult: subtask => store.dispatch(subtasksApi.uploadSubtask(subtask, taskId)),
            
            //name must be equal property from data(task)            
            formFields 
        };


        let handleRemoveClick = id => store.dispatch(subtasksApi.removeSubtask(id));
        
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

export default Subtasks;