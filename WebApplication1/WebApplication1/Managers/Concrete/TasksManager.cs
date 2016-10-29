using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApplication1.Data.Repositories;
using TaskModel = WebApplication1.Data.DB.Entities.Task;

namespace WebApplication1.Managers.Concrete
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

        public Task AddTaskAsync(TaskModel task)
        {
            return _tasksRepository.AddItemAsync(task);
        }

        public Task UpdateTaskAsync(TaskModel task)
        {
            return _tasksRepository.UpdateItemAsync(task);
        }

        public Task RemoveTaskAsync(int taskId)
        {
            return _tasksRepository.RemoveItemAsync(taskId);
        }
    }
}