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
            return (await _subtasksRepository.GetItemsAsync())
                .Select(subtask => subtask.ToSubtaskModel());
        }

        public async Task<IEnumerable<SubtaskModel>> GetSubtasksByTaskIdAsync(int taskId)
        {
            return (await _subtasksRepository.GetItemsAsync(item => item.Where(i => i.Task.Id == taskId)))
                .Select(subtask => subtask.ToSubtaskModel());
        }

        public async Task<SubtaskModel> GetSubtaskAsync(int subtaskId)
        {
            return (await _subtasksRepository.GetItemAsync(subtaskId))
                .ToSubtaskModel();
        }

        public async Task<SubtaskModel> AddSubtaskAsync(int taskId, SubtaskModel subtaskModel)
        {
            CheckIsValid(subtaskModel);

            subtaskModel.TaskId = taskId;

            return (await _subtasksRepository.AddItemAsync(subtaskModel.ToSubtask()))
                .ToSubtaskModel();
        }

        public async Task<SubtaskModel> UpdateSubtaskAsync(SubtaskModel subtaskModel)
        {
            CheckIsValid(subtaskModel);

            return (await _subtasksRepository.UpdateItemAsync(subtaskModel.ToSubtask()))
                .ToSubtaskModel();
        }

        public Task RemoveSubtaskAsync(int subtaskId)
        {
            return _subtasksRepository.RemoveItemAsync(subtaskId);
        }

        private void CheckIsValid(SubtaskModel subtaskModel)
        {
            if (string.IsNullOrEmpty(subtaskModel.Name)
                || string.IsNullOrEmpty(subtaskModel.Description))
            {
                throw new Exception("invalid_data");
            }
        }
    }
}