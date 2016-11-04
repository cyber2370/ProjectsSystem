import React from 'react';
import Table from './Table';

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
        
        let tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
					<td>{element.description}</td>
                    <td>{element.duration}</td>
                    <td width="20%">
                        <button className="btn btn-danger">Edit</button>
                        <button className="btn btn-danger" onClick={self.props.removeSubtask.bind(null, element.id)}>Remove</button>
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

export default Subtasks;