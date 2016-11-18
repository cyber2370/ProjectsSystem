using System;
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
    public class TasksController : ApiControllerBase
    {
        private readonly ITasksManager _tasksManager;
        private readonly TaskModelValidator _taskModelValidator;

        public TasksController(
            ITasksManager tasksManager,
            TaskModelValidator taskModelValidator)
        {
            _tasksManager = tasksManager;
            _taskModelValidator = taskModelValidator;
        }

        // GET api/<controller>
        public async Task<IEnumerable<TaskModel>> GetTasks()
        {
            return await _tasksManager.GetTasksAsync();
        }

        // GET api/tasks/project/{id}
        [Route("api/projects/{id}/tasks")]
        public async Task<IEnumerable<TaskModel>> GetTasksByProjectId(int id)
        {
            return await _tasksManager.GetTasksByProjectIdAsync(id);
        }

        // GET api/<controller>/5
        public async Task<TaskModel> GetTask(int id)
        {
            var task = await _tasksManager.GetTaskAsync(id);

            await ValidateTask(task);

            return task;
        }

        // POST api/<controller>
        [System.Web.Http.Route("api/projects/{id}/tasks")]
        public async Task<TaskModel> PostTask(int id, [FromBody]TaskModel task)
        {
            await ValidateTask(task);

            return await _tasksManager.AddTaskAsync(id, task);
        }

        // PUT api/<controller>/5
        public async Task<TaskModel> PutTask([FromBody]TaskModel task)
        {
            await ValidateTask(task);

            return await _tasksManager.UpdateTaskAsync(task);
        }

        // DELETE api/<controller>/5
        public async Task DeleteTask(int id)
        {
            await _tasksManager.RemoveTaskAsync(id);
        }

        private async Task ValidateTask(TaskModel task)
        {
            string message;

            if (task == null)
            {
                message = "Task not found";

                throw new HttpResponseException(
                    Request.CreateErrorResponse(HttpStatusCode.NotFound, message));
            }

            var validationResults = await _taskModelValidator.ValidateAsync(task);

            if (validationResults.IsValid)
                return;

            message = "Task is not valid";

            throw new HttpResponseException(
                Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    message,
                    new ValidationException(validationResults.Errors)));
        }
    }
}