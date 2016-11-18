using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using FluentValidation;
using Managers.Interfaces;
using Managers.Models;
using ProjectsSystemApi.Validators;

namespace ProjectsSystemApi.Controllers
{
    public class ProjectsController : ApiControllerBase
    {
        private readonly IProjectsManager _projectsManager;
        private readonly ProjectModelValidator _projectModelValidator;

        public ProjectsController(
            IProjectsManager projectsManager,
            ProjectModelValidator projectModelValidator)
        {
            _projectsManager = projectsManager;
            _projectModelValidator = projectModelValidator;
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

            await ValidateProject(project);

            return project;
        }

        // POST api/<controller>
        public async Task<ProjectModel> Post([FromBody]ProjectModel project)
        {
            await ValidateProject(project);

            return await _projectsManager.AddProjectAsync(project);
        }

        // PUT api/<controller>/5
        public async Task<ProjectModel> Put([FromBody]ProjectModel project)
        {
            await ValidateProject(project);

            return await _projectsManager.UpdateProjectAsync(project);
        }

        // DELETE api/<controller>/5
        public async Task Delete(int id)
        {
            await _projectsManager.RemoveProjectAsync(id);
        }

        private async Task ValidateProject(ProjectModel project)
        {
            string message;

            if (project == null)
            {
                message = "Project not found";

                throw new HttpResponseException(
                    Request.CreateErrorResponse(HttpStatusCode.NotFound, message));
            }

            var validationResults = await _projectModelValidator.ValidateAsync(project);

            if (validationResults.IsValid)
                return;

            message = "Project is not valid";

            throw new HttpResponseException(
                Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest, 
                    message, 
                    new ValidationException(validationResults.Errors)));
        }
    }
}