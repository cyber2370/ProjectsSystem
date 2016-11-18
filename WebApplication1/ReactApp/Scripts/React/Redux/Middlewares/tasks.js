import { getTasksAsync, 
         getTasksByProjectIdAsync, 
         getTaskByIdAsync, 
         addTaskAsync,
         updateTaskAsync,
         deleteTaskAsync } from '../../../api/tasksApi';

export const loadTasks = function() {
  console.log(loadTasks.name);
  return {
    type: 'PROMISE',
    actions: ['TASKS_LOADING', 'TASKS_LOADED', 'TASKS_LOAD_FAILURE'],
    promise: getTasksAsync
  };
};

export const loadTasksByProjectId = function(projectId) {
  console.log(loadTasksByProjectId.name);
  return {
    type: 'PROMISE',
    actions: ['TASKS_LOADING', 'TASKS_LOADED', 'TASKS_LOAD_FAILURE'],
    promise: getTasksByProjectIdAsync,
    queryParams: {
      projectId
    }
  };
};

export const loadTaskById = function(taskId) {
  return {
    type: 'PROMISE',
    actions: ['TASK_LOADING', 'TASK_LOADED', 'TASK_LOAD_FAILURE'],
    promise: getTaskByIdAsync,
    queryParams: {
      taskId
    }
  };
};

export const uploadTask = function(task, projectId) {
  return {
    type: 'PROMISE',
    actions: ['TASK_UPLOADING', 'TASK_UPLOADED', 'TASK_UPLOAD_FAILURE'],
    promise: addTaskAsync,
    queryParams: {
      projectId,
      task
    }
  };
};

export const updateTask = function(task) {
  return {
    type: 'PROMISE',
    actions: ['TASK_UPDATING', 'TASK_UPDATED', 'TASK_UPDATE_FAILURE'],
    promise: updateTaskAsync,
    queryParams: {
      task
    }
  };
};

export const removeTask = function(taskId) {
  return {
    type: 'PROMISE',
    actions: ['TASK_REMOVING', 'TASK_REMOVED', 'TASK_REMOVE_FAILURE'],
    promise: deleteTaskAsync,
    queryParams: {
      taskId
    }
  };
};