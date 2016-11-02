import React from 'react'
import { Link } from 'react-router'
import Table from './Table'

var cols = [{
    name: "Subtask Name"
}, {
    name: "Duration"
}, {
    name: "Actions"
}];

const Subtasks = React.createClass({
    render: function () {
        var self = this;

        return <div className="app-content">
            <Table columns={cols} />
        </div>;
    }
});

export default Subtasks;