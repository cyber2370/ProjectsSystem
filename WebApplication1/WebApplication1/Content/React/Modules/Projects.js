import React from 'react';
import Table from './Table';
import { render } from 'react-dom';
import { Link } from 'react-router';

import EditProjectModal from './EditProjectModal';

var cols = [{
    name: "Project Name"
}, {
    name: "Owner"
}, {
    name: "Actions"
}];

const Projects = React.createClass({
    render: function () {
        let self = this;
        
        let tableRowDataProcesser = function(element) {
            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.owner}</td>
                    <td width="20%">
                        <Link to={'/projects/' + element.id}>
                            <button className="btn btn-info">Tasks</button>
                        </Link>
                        <EditProjectModal />
                        <button className="btn btn-danger" onClick={self.props.removeProject.bind(null, element.id)}>Remove</button>
                    </td>
                </tr>
            );
        };

        let tableData = this.props.projects;

        return <div className="app-content">
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} />
        </div>;
    }
});

export default Projects;