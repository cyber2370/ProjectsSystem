﻿import React from 'react'
import { Link } from 'react-router'
import Table from './Table'

var cols = [{
    name: "Task Name"
}, {
    name: "Description"
}, {
    name: "Actions"
}];

const Tasks = React.createClass({
    render: function () {
        var self = this;

        return <div className="app-content">
            <Table columns={cols} />
        </div>;
    }
});

export default Tasks;
