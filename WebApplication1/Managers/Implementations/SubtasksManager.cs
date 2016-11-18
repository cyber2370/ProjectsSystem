using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Managers.Extensions;
using Managers.Interfaces;
using Managers.Models;
using Repositories.Interfaces;
using Task = System.Threading.Tasks.Task;

namespace Managers.Implementations
{
    internal class SubtasksManager : ISubtasksManager
    {
        private readonly ISubtasksRepository _subtasksRepository;

        public SubtasksManager(ISubtasksRepository subtasksRepository)
        {
            _subtasksRepository = subtasksRepository;
        }

        public async Task<IEnumerable<SubtaskModel>> GetSubtasksAsync()
        {
            var subtasks = await _subtasksRepository.GetItemsAsync();

            return subtasks?.Select(subtask => subtask.ToSubtaskModel());
        }

        public async Task<IEnumerable<SubtaskModel>> GetSubtasksByTaskIdAsync(int taskId)
        {
            var subtasks = await _subtasksRepository.GetItemsAsync(item => item.Where(i => i.Task.Id == taskId));

            return subtasks?.Select(subtask => subtask.ToSubtaskModel());
        }

        public async Task<SubtaskModel> GetSubtaskAsync(int subtaskId)
        {
            var subtask = await _subtasksRepository.GetItemAsync(subtaskId);

            return subtask?.ToSubtaskModel();
        }

        public async Task<SubtaskModel> AddSubtaskAsync(int taskId, SubtaskModel subtaskModel)
        {
            subtaskModel.TaskId = taskId;

            var addedSubtask = await _subtasksRepository.AddItemAsync(subtaskModel.ToSubtask());

            return addedSubtask?.ToSubtaskModel();
        }

        public async Task<SubtaskModel> UpdateSubtaskAsync(SubtaskModel subtaskModel)
        {
            var subtask = await _subtasksRepository.UpdateItemAsync(subtaskModel.ToSubtask());

            return subtask?.ToSubtaskModel();
        }

        public Task RemoveSubtaskAsync(int subtaskId)
        {
            return _subtasksRepository.RemoveItemAsync(subtaskId);
        }
    }
}