using System.Collections.Generic;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Managers.Models;
using Task = System.Threading.Tasks.Task;

namespace Managers.Interfaces
{
    public interface IProjectsManager
    {
        Task<IEnumerable<ProjectModel>> GetProjectsAsync();

        Task<ProjectModel> GetProjectAsync(int projectId);

        Task<ProjectModel> AddProjectAsync(ProjectModel project);

        Task<ProjectModel> UpdateProjectAsync(ProjectModel project);

        Task RemoveProjectAsync(int projectId);
    }
}
