using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Managers;
using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Controllers.Api
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
        public async Task<Project> Post([FromBody]Project project)
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
        public async Task<Project> Put([FromBody]Project project)
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