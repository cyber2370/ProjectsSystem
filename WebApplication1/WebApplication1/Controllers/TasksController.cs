using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Managers;
using TaskModel = WebApplication1.Data.DB.Entities.Task;

namespace WebApplication1.Controllers
{
    public class TasksController : ApiController
    {
        private readonly ITasksManager _tasksManager;

        public TasksController()
        {
            _tasksManager = DependencyResolver.Current.GetService<ITasksManager>();
        }

        // GET api/<controller>
        public async Task<IEnumerable<TaskModel>> GetTasks()
        {
            return await _tasksManager.GetTasksAsync();
        }

        // GET api/tasks/project/{id}
        [System.Web.Http.Route("api/projects/{id}/tasks")]
        public Task<IEnumerable<TaskModel>> GetTasksByProjectId(int id)
        {
            return _tasksManager.GetTasksByProjectIdAsync(id);
        }

        // GET api/<controller>/5
        public async Task<TaskModel> GetTask(int taskId)
        {
            return await _tasksManager.GetTaskAsync(taskId);
        }

        // POST api/<controller>
        public async Task PostTask([FromBody]TaskModel task)
        {
            await _tasksManager.AddTaskAsync(task);
        }

        // PUT api/<controller>/5
        public async Task PutTask(int id, [FromBody]TaskModel task)
        {
            await _tasksManager.UpdateTaskAsync(task);
        }

        // DELETE api/<controller>/5
        public async Task DeleteTask(int taskId)
        {
            await _tasksManager.RemoveTaskAsync(taskId);
        }
    }
}