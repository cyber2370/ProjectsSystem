﻿import React from 'react';
import { Link } from 'react-router';

const Table = React.createClass({
    render: function() {

        let columns = this.props.columns;
        let data = this.props.data;
        let rowDataProcesser = this.props.rowDataProcesser;

        return <table className="table table-striped table-hover">
            <thead>
            <tr>
                {
                    columns.map(function(el, index) {
                        return <th key={index}>{el.name}</th>;
                    })
                }
            </tr>
            </thead>
            <tbody>
                {
                    data.map(rowDataProcesser)
                }
            </tbody>
        </table>;
    }
});

export default Table;