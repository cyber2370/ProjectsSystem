import { getProjectsAsync, 
         getProjectByIdAsync, 
         addProjectAsync, 
         updateProjectAsync,
         deleteProjectAsync } from '../../../api/projectsApi';

export const loadProjects = function() {
  console.log(loadProjects.name);
  return {
    type: 'PROMISE',
    actions: ['PROJECTS_LOADING', 'PROJECTS_LOADED', 'PROJECTS_LOAD_FAILURE'],
    promise: getProjectsAsync
  };
};

export const loadProject = function(projectId) {
  return {
    type: 'PROMISE',
    actions: ['PROJECT_LOADING', 'PROJECT_LOADED', 'PROJECT_LOAD_FAILURE'],
    promise: getProjectByIdAsync,
    queryParams: {
      projectId
    }
  };
};

export const uploadProject = function(project) {
  return {
    type: 'PROMISE',
    actions: ['PROJECT_UPLOADING', 'PROJECT_UPLOADED', 'PROJECT_UPLOAD_FAILURE'],
    promise: addProjectAsync,
    queryParams: {
      project
    }
  };
};

export const updateProject = function(project) {
  return {
    type: 'PROMISE',
    actions: ['PROJECT_UPDATING', 'PROJECT_UPDATED', 'PROJECT_UPDATE_FAILURE'],
    promise: updateProjectAsync,
    queryParams: {
      project
    }
  };
};

export const removeProject = function(projectId) {
  return {
    type: 'PROMISE',
    actions: ['PROJECT_REMOVING', 'PROJECT_REMOVED', 'PROJECT_REMOVE_FAILURE'],
    promise: deleteProjectAsync,
    queryParams: {
      projectId
    }
  };
};