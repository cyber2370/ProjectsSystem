using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Managers.Interfaces;
using ProjectModel = ProjectsSystemApi.Models.ProjectModel;
using ManagerProjectModel = Managers.Models.ProjectModel;

namespace ProjectsSystemApi.Controllers
{
    public class ProjectsController : ApiControllerBase
    {
        private readonly IProjectsManager _projectsManager;

        public ProjectsController(IProjectsManager projectsManager)
        {
            _projectsManager = projectsManager;
        }
        
        public async Task<IEnumerable<ProjectModel>> Get()
        {
            return Mapper.Map<IEnumerable<ManagerProjectModel>, IEnumerable<ProjectModel>>(await _projectsManager.GetProjectsAsync());
        }
        
        public async Task<ProjectModel> Get(int id)
        {
            var project = await _projectsManager.GetProjectAsync(id);

            if (project == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return Mapper.Map<ManagerProjectModel, ProjectModel>(project);
        }
        
        public async Task<ProjectModel> Post([FromBody]ProjectModel project)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerProjectModel projectModel = Mapper.Map<ProjectModel, ManagerProjectModel>(project);

            return Mapper.Map<ManagerProjectModel, ProjectModel>(await _projectsManager.AddProjectAsync(projectModel));
        }
        
        public async Task<ProjectModel> Put([FromBody]ProjectModel project)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerProjectModel projectModel = Mapper.Map<ProjectModel, ManagerProjectModel>(project);

            return Mapper.Map<ManagerProjectModel, ProjectModel>(await _projectsManager.UpdateProjectAsync(projectModel));
        }
        
        public async Task Delete(int id)
        {
            await _projectsManager.RemoveProjectAsync(id);
        }
    }
}