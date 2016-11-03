using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Data.Repositories;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Managers.Concrete
{
    public class ProjectsManager : IProjectsManager
    {
        private readonly IProjectsRepository _projectsRepository;

        public ProjectsManager(IProjectsRepository projectsRepository)
        {
            _projectsRepository = projectsRepository;
        }

        public Task<IEnumerable<Project>> GetProjectsAsync()
        {
            return _projectsRepository.GetItemsAsync();
        }

        public Task<Project> GetProjectAsync(int projectId)
        {
            return _projectsRepository.GetItemAsync(projectId);
        }

        public Task<Project> AddProjectAsync(Project project)
        {
            CheckIsValid(project);

            return _projectsRepository.AddItemAsync(project);
        }

        public Task<Project> UpdateProjectAsync(Project project)
        {
            CheckIsValid(project);

            return _projectsRepository.UpdateItemAsync(project);
        }

        public Task RemoveProjectAsync(int projectId)
        {
            return _projectsRepository.RemoveItemAsync(projectId);
        }

        private void CheckIsValid(Project project)
        {
            if (string.IsNullOrEmpty(project.Name)
                || string.IsNullOrEmpty(project.Owner))
            {
                throw new Exception("invalid_data");
            }
        }
    }
}