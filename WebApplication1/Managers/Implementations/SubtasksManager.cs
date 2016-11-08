using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Managers.Interfaces;
using Repositories.Interfaces;
using Task = System.Threading.Tasks.Task;

namespace Managers.Implementations
{
    public class SubtasksManager : ISubtasksManager
    {
        private readonly ISubtasksRepository _subtasksRepository;

        public SubtasksManager(ISubtasksRepository subtasksRepository)
        {
            _subtasksRepository = subtasksRepository;
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