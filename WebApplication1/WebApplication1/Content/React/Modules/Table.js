import React from 'react'

const Table = React.createClass({
    render: function() {
        var data = this.props.columns;

        return <table className="table table-striped table-hover">
            <thead>
            <tr>
                {
                    data.map(function(el) {
                        return <th>{el.name}</th>;
                    })
                }
            </tr>
            </thead>
        </table>;
    }
});

export default Table;