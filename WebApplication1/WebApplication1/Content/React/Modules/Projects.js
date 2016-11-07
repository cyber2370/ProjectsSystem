import React from 'react';
import Table from './Table';
import { render } from 'react-dom';
import { Link } from 'react-router';

import EditFormModal from './EditFormModal';

const Projects = React.createClass({
    render: function () {
        let self = this;

        let cols = [{
            name: "Project Name"
        }, {
            name: "Owner"
        }, {
            name: "Actions"
        }];

        let formFields = [{
                name:  'name',
                label:  'Project Name'
            }, {
                name:  'owner',
                label:  'Owner'
            }];

        let editModalSettings = {
            title: "Edit Project",

            modalButtonName: "Edit",

            handleResult: this.props.updateProject,
            
            //name must be equal property from data(project)            
            formFields
        };

        let addModalSettings = {
            title: "Add Project",

            modalButtonName: "Add",

            handleResult: this.props.addProject,
            
            //name must be equal property from data(project)            
            formFields
        };
                
        let tableRowDataProcesser = function(element) {
            let uniqIndex = (Math.random() * 1234567) ^ 0;

            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.owner}</td>
                    <td width="20%">
                        <Link to={'/projects/' + element.id}>
                            <button className="btn btn-info">Tasks</button>
                        </Link>
                        <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                        <button className="btn btn-danger" onClick={self.props.removeProject.bind(null, element.id)}>Remove</button>
                    </td>
                </tr>
            );
        };

        let tableData = this.props.projects;

        return <div className="app-content">
            <EditFormModal {...addModalSettings}/>
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} 
                {...this.props}/>
        </div>;
    }
});

export default Projects;