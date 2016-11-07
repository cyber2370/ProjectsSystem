using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication1.Data.DB.Entities;
using WebApplication1.Managers;
using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Controllers.Api
{
    public class SubtasksController : ApiController
    {
        private readonly ISubtasksManager _subtasksManager;

        public SubtasksController()
        {
            _subtasksManager = DependencyResolver.Current.GetService<ISubtasksManager>();
        }

        // GET api/<controller>
        public async Task<IEnumerable<Subtask>> GetSubtasks()
        {
            return await _subtasksManager.GetSubtasksAsync();
        }

        // GET api/tasks/project/{id}
        [System.Web.Http.Route("api/tasks/{id}/subtasks/")]
        public Task<IEnumerable<Subtask>> GetSubtasksByTaskId(int id)
        {
            return _subtasksManager.GetSubtasksByTaskIdAsync(id);
        }

        // GET api/<controller>/5
        public async Task<Subtask> GetSubtask(int id)
        {
            return await _subtasksManager.GetSubtaskAsync(id);
        }

        // POST api/<controller>
        [System.Web.Http.Route("api/tasks/{id}/subtasks/")]
        public async Task<Subtask> PostSubtask(int id, [FromBody]Subtask subtask)
        {
            return await _subtasksManager.AddSubtaskAsync(id, subtask);
        }

        // PUT api/<controller>/5
        public async Task<Subtask> PutSubtask([FromBody]Subtask subtask)
        {
            return await _subtasksManager.UpdateSubtaskAsync(subtask);
        }

        // DELETE api/<controller>/5
        public async Task DeleteSubtask(int id)
        {
            await _subtasksManager.RemoveSubtaskAsync(id);
        }
    }
}