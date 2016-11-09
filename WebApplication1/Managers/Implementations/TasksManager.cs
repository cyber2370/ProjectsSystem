using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Managers.Extensions;
using Managers.Interfaces;
using Managers.Models;
using Repositories.Interfaces;

namespace Managers.Implementations
{
    internal class TasksManager : ITasksManager
    {
        private readonly ITasksRepository _tasksRepository;

        public TasksManager(ITasksRepository tasksRepository)
        {
            _tasksRepository = tasksRepository;
        }

        public async Task<IEnumerable<TaskModel>> GetTasksAsync()
        {
            return (await _tasksRepository.GetItemsAsync())
                .Select(task => task.ToTaskModel());
        }

        public async Task<IEnumerable<TaskModel>> GetTasksByProjectIdAsync(int projectId)
        {
            return (await _tasksRepository.GetItemsAsync(item => item.Where(i => i.Project.Id == projectId)))
                .Select(task => task.ToTaskModel());
        }

        public async Task<TaskModel> GetTaskAsync(int taskId)
        {
            return (await _tasksRepository.GetItemAsync(taskId))
                .ToTaskModel();
        }

        public async Task<TaskModel> AddTaskAsync(int projectId, TaskModel taskModel)
        {
            CheckIsValid(taskModel);

            taskModel.ProjectId = projectId;

            return (await _tasksRepository.AddItemAsync(taskModel.ToTask()))
                .ToTaskModel();
        }

        public async Task<TaskModel> UpdateTaskAsync(TaskModel taskModel)
        {
            CheckIsValid(taskModel);

            return (await _tasksRepository.UpdateItemAsync(taskModel.ToTask()))
                .ToTaskModel();
        }

        public Task RemoveTaskAsync(int taskId)
        {
            return _tasksRepository.RemoveItemAsync(taskId);
        }

        private void CheckIsValid(TaskModel task)
        {
            if (string.IsNullOrEmpty(task.Name)
                || string.IsNullOrEmpty(task.Description))
            {
                throw new Exception("invalid_data");
            }
        }
    }
}