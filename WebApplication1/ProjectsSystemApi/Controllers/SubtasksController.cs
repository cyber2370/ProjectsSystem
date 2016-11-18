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
    public class SubtasksController : ApiControllerBase
    {
        private readonly ISubtasksManager _subtasksManager;
        private readonly SubtaskModelValidator _subtaskModelValidator;

        public SubtasksController(
            ISubtasksManager subtasksManager,
            SubtaskModelValidator subtaskModelValidator)
        {
            _subtasksManager = subtasksManager;
            _subtaskModelValidator = subtaskModelValidator;
        }

        // GET api/<controller>
        public async Task<IEnumerable<SubtaskModel>> GetSubtasks()
        {
            return await _subtasksManager.GetSubtasksAsync();
        }

        // GET api/tasks/project/{id}
        [System.Web.Http.Route("api/tasks/{id}/subtasks/")]
        public async Task<IEnumerable<SubtaskModel>> GetSubtasksByTaskId(int id)
        {
            return await _subtasksManager.GetSubtasksByTaskIdAsync(id);
        }

        // GET api/<controller>/5
        public async Task<SubtaskModel> GetSubtask(int id)
        {
            var subtask = await _subtasksManager.GetSubtaskAsync(id);

            await ValidateSubtask(subtask);

            return subtask;
        }

        // POST api/<controller>
        [System.Web.Http.Route("api/tasks/{id}/subtasks/")]
        public async Task<SubtaskModel> PostSubtask(int id, [FromBody]SubtaskModel subtask)
        {
            await ValidateSubtask(subtask);

            return await _subtasksManager.AddSubtaskAsync(id, subtask);
        }

        // PUT api/<controller>/5
        public async Task<SubtaskModel> PutSubtask([FromBody]SubtaskModel subtask)
        {
            await ValidateSubtask(subtask);

            return await _subtasksManager.UpdateSubtaskAsync(subtask);
        }

        // DELETE api/<controller>/5
        public async Task DeleteSubtask(int id)
        {
            await _subtasksManager.RemoveSubtaskAsync(id);
        }

        private async Task ValidateSubtask(SubtaskModel subtask)
        {
            string message;

            if (subtask == null)
            {
                message = "Subtask not found";

                throw new HttpResponseException(
                    Request.CreateErrorResponse(HttpStatusCode.NotFound, message));
            }

            var validationResults = await _subtaskModelValidator.ValidateAsync(subtask);

            if (validationResults.IsValid)
                return;

            message = "Subtask is not valid";

            throw new HttpResponseException(
                Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    message,
                    new ValidationException(validationResults.Errors)));
        }
    }
}