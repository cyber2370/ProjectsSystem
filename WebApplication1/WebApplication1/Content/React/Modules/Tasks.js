import React from 'react';
import Table from './Table';

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

        let projectId = this.props.params.projectId;
        let tableData = this.props.tasks.filter(task => task.project.id == projectId);

        var tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td width="20%">
                        <Link to={'/tasks/' + element.id}>
                            <button className="btn btn-info">Subtasks</button>
                        </Link>
                        <button className="btn btn-danger">Edit</button>
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