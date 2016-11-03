using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Data.Repositories.Concrete;
using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Managers
{
    public interface ISubtasksManager
    {
        Task<IEnumerable<Subtask>> GetSubtasksAsync();

        Task<IEnumerable<Subtask>> GetSubtasksByTaskIdAsync(int taskId);

        Task<Subtask> GetSubtaskAsync(int subtaskId);

        Task<Subtask> AddSubtaskAsync(Subtask subtask);

        Task<Subtask> UpdateSubtaskAsync(Subtask subtask);

        Task RemoveSubtaskAsync(int subtaskId);
    }
}
