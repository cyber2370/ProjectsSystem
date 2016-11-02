import React from 'react'
import { Link } from 'react-router'
import Table from './Table'

var cols = [{
    name: "Project Name"
}, {
    name: "Owner"
}, {
    name: "Actions"
}];

export default React.createClass({
    render: function () {
        var self = this;

        return <div className="app-content">
            <Table columns={cols} />
        </div>;
    }
});

