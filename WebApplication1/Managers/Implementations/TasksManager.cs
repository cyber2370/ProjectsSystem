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
            var tasks = await _tasksRepository.GetItemsAsync();

            return tasks?.Select(t => t.ToTaskModel());
        }

        public async Task<IEnumerable<TaskModel>> GetTasksByProjectIdAsync(int projectId)
        {
            var tasks = await _tasksRepository.GetItemsAsync(item => item.Where(i => i.Project.Id == projectId));

            return tasks?.Select(task => task.ToTaskModel());
        }

        public async Task<TaskModel> GetTaskAsync(int taskId)
        {
            var task = await _tasksRepository.GetItemAsync(taskId);

            return task?.ToTaskModel();
        }

        public async Task<TaskModel> AddTaskAsync(int projectId, TaskModel taskModel)
        {
            taskModel.ProjectId = projectId;

            var addedTask = await _tasksRepository.AddItemAsync(taskModel.ToTask());

            return addedTask?.ToTaskModel();
        }

        public async Task<TaskModel> UpdateTaskAsync(TaskModel taskModel)
        {
            var updatedTask = await _tasksRepository.UpdateItemAsync(taskModel.ToTask());

            return updatedTask?.ToTaskModel();
        }

        public Task RemoveTaskAsync(int taskId)
        {
            return _tasksRepository.RemoveItemAsync(taskId);
        }
    }
}