var HorizontalMenu = React.createClass({
    getInitialState: function() {
        return {
            menuItems: [{
                    id: 1,
                    name: "Main Page",
                    parameter: "main"
                }, {
                    id: 2,
                    name: "Projects",
                    parameter: "projects"
                }, {
                    id: 3,
                    name: "Tasks",
                    parameter: "tasks"
                }
            ]};
    },

    render: function() {
        var self = this;

        return <div className="headerMenu">
                    <ul>
                        {
                            this.state.menuItems.map(function (el) {
                                return <li key={el.id}>
                                    <a href={"#" + el.parameter} onClick={self.handleClick}>{el.name}</a>
                                </li>;
                            })
                        }
                    </ul>
                </div>;
    },

    handleClick: function(event) {
        var button = event.target;

        var hrefArray = button.href.split("#");
        var href = hrefArray[hrefArray.length - 1];

        console.log(href);
    }
});

var Button = React.createClass({
    render: function() {
        var self = this;

        return <button className={this.props.classes}>{this.props.content}</button>;
    }
});

var Table = React.createClass({
    render: function() {
        var data = this.props.data;

        return <table className="table table-striped table-hover">
        <thead>
            <tr>
            {
                data.columnList.map(function(el) {
                    return <th>{el.name}</th>;
                })
            }
            </tr>
        </thead>
    </table>;
    }
});

var AppHeader = React.createClass({
    render: function() {
        return <div className="app-header">
                    <HorizontalMenu />
                </div>;
    }
});

var AppContent = React.createClass({
    getInitialState: function() {
        
        var projectsTableCols = [{
                name: "Project Name"
            }, {
                name: "Owner"
            }, {
                name: "Actions"
            }];

        var tasksTableCols = [{
                name: "Task Name"
            }, {
                name: "Description"
            }, {
                name: "Actions"
            }];

        var subtasksTableCols = [{
                name: "Subtask Name"
            }, {
                name: "Duration"
            }, {
                name: "Actions"
            }]; 

        return {
            tableData: {
                columnList: projectsTableCols
            }
        };
    },

    render: function () {
        var self = this;

        return <div className="app-content">
                <Table data={self.state.tableData}/>
            </div>;
    }
});

var ReactApp = React.createClass({
    render: function() {
        return <div className="projects-app">
                    <AppHeader />
                    <AppContent />
                </div>;
    }
});

function ClickHandler(event){
    console.log(event);
}