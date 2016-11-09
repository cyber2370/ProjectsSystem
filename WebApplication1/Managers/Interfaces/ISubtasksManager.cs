using System.Collections.Generic;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Managers.Models;
using Task = System.Threading.Tasks.Task;

namespace Managers.Interfaces
{
    public interface ISubtasksManager
    {
        Task<IEnumerable<SubtaskModel>> GetSubtasksAsync();

        Task<IEnumerable<SubtaskModel>> GetSubtasksByTaskIdAsync(int taskId);

        Task<SubtaskModel> GetSubtaskAsync(int subtaskId);

        Task<SubtaskModel> AddSubtaskAsync(int taskId, SubtaskModel subtask);

        Task<SubtaskModel> UpdateSubtaskAsync(SubtaskModel subtask);

        Task RemoveSubtaskAsync(int subtaskId);
    }
}
