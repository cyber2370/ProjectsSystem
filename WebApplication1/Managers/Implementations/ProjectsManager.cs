using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Managers.Extensions;
using Managers.Interfaces;
using Managers.Models;
using Repositories.Interfaces;

namespace Managers.Implementations
{
    internal class ProjectsManager : IProjectsManager
    {
        private readonly IProjectsRepository _projectsRepository;

        public ProjectsManager(IProjectsRepository projectsRepository)
        {
            _projectsRepository = projectsRepository;
        }

        public async Task<IEnumerable<ProjectModel>> GetProjectsAsync()
        {
            var projects = await _projectsRepository.GetItemsAsync();

            return projects.Select(project => project.ToProjectModel());
        }

        public async Task<ProjectModel> GetProjectAsync(int projectId)
        {
            var project = await _projectsRepository.GetItemAsync(projectId);

            return project?.ToProjectModel();
        }

        public async Task<ProjectModel> AddProjectAsync(ProjectModel project)
        {
            var addedProject = await _projectsRepository.AddItemAsync(project.ToProject());

            return addedProject?.ToProjectModel();
        }

        public async Task<ProjectModel> UpdateProjectAsync(ProjectModel project)
        {
            var updatedProject = await _projectsRepository.UpdateItemAsync(project.ToProject());

            return updatedProject?.ToProjectModel();
        }

        public Task RemoveProjectAsync(int projectId)
        {
            return _projectsRepository.RemoveItemAsync(projectId);
        }
    }
}