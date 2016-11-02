import React from 'react';
import Table from './Table';

import { Link } from 'react-router';

var cols = [{
    name: "Project Name"
}, {
    name: "Owner"
}, {
    name: "Actions"
}];

var tableRowDataProcesser = function(element) {
	return (
		<tr key={element.id}>
			<td>{element.projectName}</td>
			<td>{element.owner}</td>
			<td width="20%">
                <button className="btn btn-info">Details</button>
                <button className="btn btn-danger">Edit</button>
                <button className="btn btn-danger">Remove</button>
            </td>
		</tr>
	);
};

const Projects = React.createClass({
    render: function () {
        let tableData = this.props.projects;

        return <div className="app-content">
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} />
        </div>;
    }
});

export default Projects;