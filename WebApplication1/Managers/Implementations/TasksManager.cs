using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Managers.Interfaces;
using Repositories.Interfaces;
using TaskModel = DatabaseStorage.Entities.Task;

namespace Managers.Implementations
{
    public class TasksManager : ITasksManager
    {
        private readonly ITasksRepository _tasksRepository;

        public TasksManager(ITasksRepository tasksRepository)
        {
            _tasksRepository = tasksRepository;
        }

        public Task<IEnumerable<TaskModel>> GetTasksAsync()
        {
            return _tasksRepository.GetItemsAsync();
        }

        public Task<IEnumerable<TaskModel>> GetTasksByProjectIdAsync(int projectId)
        {
            return _tasksRepository.GetItemsAsync(item => item.Where(i => i.Project.Id == projectId));
        }

        public Task<TaskModel> GetTaskAsync(int taskId)
        {
            return _tasksRepository.GetItemAsync(taskId);
        }

        public async Task<TaskModel> AddTaskAsync(int projectId, TaskModel task)
        {
            CheckIsValid(task);

            task.ProjectId = projectId;

            return await _tasksRepository.AddItemAsync(task);
        }

        public Task<TaskModel> UpdateTaskAsync(TaskModel task)
        {
            CheckIsValid(task);

            return _tasksRepository.UpdateItemAsync(task);
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