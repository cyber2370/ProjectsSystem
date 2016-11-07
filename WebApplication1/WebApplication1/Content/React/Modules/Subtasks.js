import React from 'react';
import Table from './Table';
import EditFormModal from './EditFormModal';

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
    render: function () {
        let self = this;

        let taskId = this.props.params.taskId;
        let tableData = this.props.subtasks.filter(subtask => subtask.task.id == taskId);
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

            handleResult: this.props.updateSubtask,
            
            //name must be equal property from data(subtask)            
            formFields
        };

        let addModalSettings = {
            title: "Add Subtask",

            modalButtonName: "Add",

            handleResult: function(subtask) {
                console.log(taskId);
                self.props.addSubtask(taskId, subtask);
            },

            
            //name must be equal property from data(task)            
            formFields 
        };
        
        let tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
					<td>{element.description}</td>
                    <td>{element.duration}</td>
                    <td width="20%">
                        <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                        <button className="btn btn-danger" onClick={self.props.removeSubtask.bind(null, element.id)}>Remove</button>
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

export default Subtasks;