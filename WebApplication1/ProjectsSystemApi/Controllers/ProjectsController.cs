using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Managers.Interfaces;
using Managers.Models;

namespace ProjectsSystemApi.Controllers
{
    public class ProjectsController : ApiControllerBase
    {
        private readonly IProjectsManager _projectsManager;

        public ProjectsController(IProjectsManager projectsManager)
        {
            _projectsManager = projectsManager;
        }

        // GET api/<controller>
        public async Task<IEnumerable<ProjectModel>> Get()
        {
            return await _projectsManager.GetProjectsAsync();
        }

        // GET api/<controller>/5
        public async Task<ProjectModel> Get(int id)
        {
            var project = await _projectsManager.GetProjectAsync(id);

            if (project == null)
            {
                var message = $"Project with id = {id} not found";
                throw new HttpResponseException(
                    Request.CreateErrorResponse(HttpStatusCode.NotFound, message));
            }

            return project;
        }

        // POST api/<controller>
        public async Task<ProjectModel> Post([FromBody]ProjectModel project)
        {
            //todo: add verification 

            var addedProject = await _projectsManager.AddProjectAsync(project);

            return addedProject;

        }

        // PUT api/<controller>/5
        public async Task<ProjectModel> Put([FromBody]ProjectModel project)
        {
            return await _projectsManager.UpdateProjectAsync(project);
        }

        // DELETE api/<controller>/5
        public async Task Delete(int id)
        {
            await _projectsManager.RemoveProjectAsync(id);
        }
    }
}