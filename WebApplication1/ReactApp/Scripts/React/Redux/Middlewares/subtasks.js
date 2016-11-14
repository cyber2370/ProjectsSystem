import { getSubtasksAsync, 
         getSubtasksByTaskIdAsync, 
         getSubtaskByIdAsync, 
         addSubtaskAsync,
         updateSubtaskAsync,
         deleteSubtaskAsync } from '../../../api/subtasksApi';


export const loadSubtasks = function() {
  return {
    type: 'PROMISE',
    actions: ['SUBTASKS_LOADING', 'SUBTASKS_LOADED', 'SUBTASKS_LOAD_FAILURE'],
    promise: getSubtasksAsync
  };
};

export const loadSubtasksByTaskIdAsync = function(taskId) {
  return {
    type: 'PROMISE',
    actions: ['SUBTASKS_LOADING', 'SUBTASKS_LOADED', 'SUBTASKS_LOAD_FAILURE'],
    promise: getSubtasksByTaskIdAsync,
    queryParams: {
      taskId
    }
  };
};

export const loadSubtaskByIdAsync = function(subtaskId) {
  return {
    type: 'PROMISE',
    actions: ['SUBTASK_LOADING', 'SUBTASK_LOADED', 'SUBTASK_LOAD_FAILURE'],
    promise: getSubtaskByIdAsync,
    queryParams: {
      subtaskId
    }
  };
};

export const uploadSubtask = function(subtask, taskId) {
  return {
    type: 'PROMISE',
    actions: ['SUBTASK_UPLOADING', 'SUBTASK_UPLOADED', 'SUBTASK_UPLOAD_FAILURE'],
    promise: addSubtaskAsync,
    queryParams: {
      subtask,
      taskId
    }
  };
};

export const updateSubtask = function(subtask) {
  return {
    type: 'PROMISE',
    actions: ['SUBTASK_UPDATING', 'SUBTASK_UPDATED', 'SUBTASK_UPDATE_FAILURE'],
    promise: updateSubtaskAsync,
    queryParams: {
      subtask
    }
  };
};

export const removeSubtask = function(subtaskId) {
  return {
    type: 'PROMISE',
    actions: ['SUBTASK_REMOVING', 'SUBTASK_REMOVED', 'SUBTASK_REMOVE_FAILURE'],
    promise: deleteSubtaskAsync,
    queryParams: {
      subtaskId
    }
  };
};