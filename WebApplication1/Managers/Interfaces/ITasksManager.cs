using System.Collections.Generic;
using System.Threading.Tasks;
using TaskModel = DatabaseStorage.Entities.Task;

namespace Managers.Interfaces
{
    public interface ITasksManager
    {
        Task<IEnumerable<TaskModel>> GetTasksAsync();

        Task<IEnumerable<TaskModel>> GetTasksByProjectIdAsync(int projectId);

        Task<TaskModel> GetTaskAsync(int taskId);

        Task<TaskModel> AddTaskAsync(int projectId, TaskModel task);

        Task<TaskModel> UpdateTaskAsync(TaskModel task);

        Task RemoveTaskAsync(int taskId);
    }
}
