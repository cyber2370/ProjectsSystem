import React from 'react';
import Table from './Table';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { getProjectsAsync, 
         getProjectByIdAsync, 
         addProjectAsync, 
         updateProjectAsync,
         deleteProjectAsync } from '../../Api/projectsApi';

import EditFormModal from './EditFormModal';

const Projects = React.createClass({
    componentWillMount: function() {
        let callback = this.props.addProjects;

        getProjectsAsync(callback);         
    },

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

            handleResult: function(project) {
                let callback = self.props.updateProject;

                updateProjectAsync(project, callback);
            }, 
            
            //name must be equal property from data(project)            
            formFields
        };

        let addModalSettings = {
            title: "Add Project",

            modalButtonName: "Add",

            handleResult: function(project) {
                let callback = self.props.addProject;

                addProjectAsync(project, callback);
            }, 
            
            //name must be equal property from data(project)            
            formFields
        };

        let handleRemoveClick = function(projectId) {
            let callback = self.props.removeProject;
            
            deleteProjectAsync(projectId, callback);
        };
                
        let tableRowDataProcesser = function(element) {
            let uniqIndex = (Math.random() * 1234567) ^ 0;

            return (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.owner}</td>
                    <td width="20%">
                        <ul className="list-inline">
                            <li>
                                <Link to={'/projects/' + element.id}>
                                    <button className="btn btn-info">Tasks</button>
                                </Link>
                            </li>
                            <li>
                                <EditFormModal data={element} {...editModalSettings} key={uniqIndex}/>
                            </li>
                            <li>
                                <button className="btn btn-danger" onClick={handleRemoveClick.bind(null, element.id)}>Remove</button>
                            </li>
                        </ul>
                    </td>
                </tr>
            );
        };

        let tableData = this.props.projects;

        return <div className="app-content">
            <EditFormModal {...addModalSettings} className="addButton"/>
            <Table columns={cols} 
            	data={tableData} 
            	rowDataProcesser={tableRowDataProcesser} 
                {...this.props}/>
        </div>;
    }
});

export default Projects;