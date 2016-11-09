using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Managers.Interfaces;
using Managers.Models;
using Task = System.Threading.Tasks.Task;

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
            return await _projectsManager.GetProjectAsync(id);
        }

        // POST api/<controller>
        public async Task<ProjectModel> Post([FromBody]ProjectModel project)
        {
            try
            {
                return await _projectsManager.AddProjectAsync(project);
            }
            catch (Exception ex)
            {
                //TODO: return 'json' data exception
                return null;
            }
        }

        // PUT api/<controller>/5
        public async Task<ProjectModel> Put([FromBody]ProjectModel project)
        {
            try
            {
                return await _projectsManager.UpdateProjectAsync(project);
            }
            catch (Exception ex)
            {
                //TODO: return 'json' data exception
                return null;
            }
        }

        // DELETE api/<controller>/5
        public async Task Delete(int id)
        {
            await _projectsManager.RemoveProjectAsync(id);
        }
    }
}