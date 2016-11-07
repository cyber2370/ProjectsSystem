using System.Collections.Generic;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Task = System.Threading.Tasks.Task;

namespace Managers.Interfaces
{
    public interface ISubtasksManager
    {
        Task<IEnumerable<Subtask>> GetSubtasksAsync();

        Task<IEnumerable<Subtask>> GetSubtasksByTaskIdAsync(int taskId);

        Task<Subtask> GetSubtaskAsync(int subtaskId);

        Task<Subtask> AddSubtaskAsync(int taskId, Subtask subtask);

        Task<Subtask> UpdateSubtaskAsync(Subtask subtask);

        Task RemoveSubtaskAsync(int subtaskId);
    }
}
