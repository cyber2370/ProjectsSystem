using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Managers;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Controllers
{
    public class ProjectsController : ApiController
    {
        private readonly IProjectsManager _projectsManager;

        public ProjectsController()
        {
            _projectsManager = DependencyResolver.Current.GetService<IProjectsManager>();
        }

        // GET api/<controller>
        public async Task<IEnumerable<Project>> Get()
        {
            return await _projectsManager.GetProjectsAsync();
        }

        // GET api/<controller>/5
        public async Task<Project> Get(int id)
        {
            return await _projectsManager.GetProjectAsync(id);
        }

        // POST api/<controller>
        public async Task Post([FromBody]Project project)
        {
            await _projectsManager.AddProjectAsync(project);
        }

        // PUT api/<controller>/5
        public async Task Put(int id, [FromBody]Project project)
        {
            await _projectsManager.UpdateProjectAsync(project);
        }

        // DELETE api/<controller>/5
        public async Task Delete(int id)
        {
            await _projectsManager.RemoveProjectAsync(id);
        }
    }
}