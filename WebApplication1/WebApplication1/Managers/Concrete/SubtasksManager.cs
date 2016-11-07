using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Data.Repositories;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Managers.Concrete
{
    public class SubtasksManager : ISubtasksManager
    {
        private readonly ISubtasksRepository _subtasksRepository;
        private readonly ITasksManager _tasksManager;

        public SubtasksManager(
            ISubtasksRepository subtasksRepository,
            ITasksManager tasksManager)
        {
            _subtasksRepository = subtasksRepository;
            _tasksManager = tasksManager;
        }

        public Task<IEnumerable<Subtask>> GetSubtasksAsync()
        {
            return _subtasksRepository.GetItemsAsync();
        }

        public Task<IEnumerable<Subtask>> GetSubtasksByTaskIdAsync(int taskId)
        {
            return _subtasksRepository.GetItemsAsync(item => item.Where(i => i.Task.Id == taskId));
        }

        public Task<Subtask> GetSubtaskAsync(int subtaskId)
        {
            return _subtasksRepository.GetItemAsync(subtaskId);
        }

        public async Task<Subtask> AddSubtaskAsync(int taskId, Subtask subtask)
        {
            CheckIsValid(subtask);

            subtask.TaskId = taskId;

            return await _subtasksRepository.AddItemAsync(subtask);
        }

        public Task<Subtask> UpdateSubtaskAsync(Subtask subtask)
        {
            CheckIsValid(subtask);

            return _subtasksRepository.UpdateItemAsync(subtask);
        }

        public Task RemoveSubtaskAsync(int subtaskId)
        {
            return _subtasksRepository.RemoveItemAsync(subtaskId);
        }

        private void CheckIsValid(Subtask subtask)
        {
            if (string.IsNullOrEmpty(subtask.Name)
                || string.IsNullOrEmpty(subtask.Description))
            {
                throw new Exception("invalid_data");
            }
        }
    }
}