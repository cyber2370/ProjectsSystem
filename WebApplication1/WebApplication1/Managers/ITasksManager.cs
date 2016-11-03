using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using TaskModel = WebApplication1.Data.DB.Entities.Task;

namespace WebApplication1.Managers
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
