import React from 'react'
import Table from './Table'

var cols = [{
    name: "Project Name"
}, {
    name: "Owner"
}, {
    name: "Actions"
}];

const Projects = React.createClass({
    render: function () {
        var self = this;

        return <div className="app-content">
            <Table columns={cols} />
        </div>;
    }
});

export default Projects;