using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Data.DB.Entities;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Managers
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
