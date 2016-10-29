using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Data.DB.Entities;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Managers
{
    public interface ISubtasksManager
    {
        Task<IEnumerable<Subtask>> GetSubtasksAsync();

        Task<IEnumerable<Subtask>> GetSubtasksByTaskIdAsync(int taskId);

        Task<Subtask> GetSubtaskAsync(int subtaskId);

        Task AddSubtaskAsync(Subtask subtask);

        Task UpdateSubtaskAsync(Subtask subtask);

        Task RemoveSubtaskAsync(int subtaskId);
    }
}
