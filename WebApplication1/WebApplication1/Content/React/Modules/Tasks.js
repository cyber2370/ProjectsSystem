import React from 'react';
import Table from './Table';

import { Link } from 'react-router';
import EditFormModal from './EditFormModal';

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

        let modalSettings = {
            title: "Edit Task",

            modalButtonName: "Edit",

            handleResult: this.props.updateTask,
            
            //name must be equal property from data(task)            
            formFields: [{
                name:  'name',
                label:  'Task Name'
            }, {
                name:  'description',
                label:  'Description'
            }]
        };

        let projectId = this.props.params.projectId;
        let tableData = this.props.tasks.filter(task => task.project.id == projectId);
        let uniqIndex = (Math.random() * 1234567) ^ 0;

        var tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td width="20%">
                        <Link to={'/tasks/' + element.id}>
                            <button className="btn btn-info">Subtasks</button>
                        </Link>
                        <EditFormModal data={element} {...modalSettings} key={uniqIndex}/>
                        <button className="btn btn-danger" onClick={self.props.removeTask.bind(null, element.id)}>Remove</button>
                    </td>
                </tr>
            );
        };

        return <div className="app-content">
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} />
        </div>;
    }
});

export default Tasks;