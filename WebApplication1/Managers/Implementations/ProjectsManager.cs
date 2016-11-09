using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DatabaseStorage.Data;
using DatabaseStorage.Entities;
using Managers.Extensions;
using Managers.Interfaces;
using Managers.Models;
using Repositories.Implementations;
using Repositories.Interfaces;
using Task = System.Threading.Tasks.Task;

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
            return (await _projectsRepository.GetItemsAsync()).Select(project => project.ToProjectModel());
        }

        public async Task<ProjectModel> GetProjectAsync(int projectId)
        {
            return (await _projectsRepository.GetItemAsync(projectId)).ToProjectModel();
        }

        public async Task<ProjectModel> AddProjectAsync(ProjectModel project)
        {
            CheckIsValid(project);

            return (await _projectsRepository.AddItemAsync(project.ToProject())).ToProjectModel();
        }

        public async Task<ProjectModel> UpdateProjectAsync(ProjectModel project)
        {
            CheckIsValid(project);

            return (await _projectsRepository.UpdateItemAsync(project.ToProject())).ToProjectModel();
        }

        public Task RemoveProjectAsync(int projectId)
        {
            return _projectsRepository.RemoveItemAsync(projectId);
        }

        private void CheckIsValid(ProjectModel projectModel)
        {
            if (string.IsNullOrEmpty(projectModel.Name)
                || string.IsNullOrEmpty(projectModel.Owner))
            {
                throw new Exception("invalid_data");
            }
        }
    }
}