using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Managers.Interfaces;
using TaskModel = ProjectsSystemApi.Models.TaskModel;
using ManagerTaskModel = Managers.Models.TaskModel;

namespace ProjectsSystemApi.Controllers
{
    public class TasksController : ApiControllerBase
    {
        private readonly ITasksManager _tasksManager;

        public TasksController(ITasksManager tasksManager)
        {
            _tasksManager = tasksManager;
        }
        
        public async Task<IEnumerable<TaskModel>> GetTasks()
        {
            return Mapper.Map<IEnumerable<ManagerTaskModel>, IEnumerable<TaskModel>>(await _tasksManager.GetTasksAsync());
        }
        
        [Route("api/projects/{id}/tasks")]
        public async Task<IEnumerable<TaskModel>> GetTasksByProjectId(int id)
        {
            return Mapper.Map<IEnumerable<ManagerTaskModel>, IEnumerable<TaskModel>>(await _tasksManager.GetTasksByProjectIdAsync(id));
        }
        
        public async Task<TaskModel> GetTask(int id)
        {
            ManagerTaskModel taskModel = await _tasksManager.GetTaskAsync(id);

            if (taskModel == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return Mapper.Map<ManagerTaskModel, TaskModel>(taskModel);
        }
        
        [Route("api/projects/{id}/tasks")]
        public async Task<TaskModel> PostTask(int id, [FromBody]TaskModel task)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerTaskModel taskModel = Mapper.Map<TaskModel, ManagerTaskModel>(task);

            return Mapper.Map<ManagerTaskModel, TaskModel>(await _tasksManager.AddTaskAsync(id, taskModel));
        }
        
        public async Task<TaskModel> PutTask([FromBody]TaskModel task)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerTaskModel taskModel = Mapper.Map<TaskModel, ManagerTaskModel>(task);

            return Mapper.Map<ManagerTaskModel, TaskModel>(await _tasksManager.UpdateTaskAsync(taskModel));
        }

        // DELETE api/<controller>/5
        public async Task DeleteTask(int id)
        {
            await _tasksManager.RemoveTaskAsync(id);
        }
    }
}