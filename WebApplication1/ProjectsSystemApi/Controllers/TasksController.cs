using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Managers.Interfaces;
using Managers.Models;

namespace ProjectsSystemApi.Controllers
{
    public class TasksController : ApiControllerBase
    {
        private readonly ITasksManager _tasksManager;

        public TasksController(ITasksManager tasksManager)
        {
            _tasksManager = tasksManager;
        }

        // GET api/<controller>
        public async Task<IEnumerable<TaskModel>> GetTasks()
        {
            return await _tasksManager.GetTasksAsync();
        }

        // GET api/tasks/project/{id}
        [System.Web.Http.Route("api/projects/{id}/tasks")]
        public async Task<IEnumerable<TaskModel>> GetTasksByProjectId(int id)
        {
            return await _tasksManager.GetTasksByProjectIdAsync(id);
        }

        // GET api/<controller>/5
        public async Task<TaskModel> GetTask(int id)
        {
            return await _tasksManager.GetTaskAsync(id);
        }

        // POST api/<controller>
        [System.Web.Http.Route("api/projects/{id}/tasks")]
        public async Task<TaskModel> PostTask(int id, [FromBody]TaskModel task)
        {
            try
            {
                return await _tasksManager.AddTaskAsync(id, task);
            }
            catch (Exception ex)
            {
                //TODO: return exception
                return null;
            }
        }

        // PUT api/<controller>/5
        public async Task<TaskModel> PutTask([FromBody]TaskModel task)
        {
            try
            {
                return await _tasksManager.UpdateTaskAsync(task);
            }
            catch (Exception ex)
            {
                //TODO: return exception
                return null;
            }
        }

        // DELETE api/<controller>/5
        public async Task DeleteTask(int id)
        {
            await _tasksManager.RemoveTaskAsync(id);
        }
    }
}