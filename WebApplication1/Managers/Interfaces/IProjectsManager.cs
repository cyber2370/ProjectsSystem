using System.Collections.Generic;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Task = System.Threading.Tasks.Task;

namespace Managers.Interfaces
{
    public interface IProjectsManager
    {
        Task<IEnumerable<Project>> GetProjectsAsync();

        Task<Project> GetProjectAsync(int projectId);

        Task<Project> AddProjectAsync(Project project);

        Task<Project> UpdateProjectAsync(Project project);

        Task RemoveProjectAsync(int projectId);
    }
}
