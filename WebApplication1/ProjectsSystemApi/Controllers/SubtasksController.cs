using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Managers.Interfaces;
using Managers.Models;
using Task = System.Threading.Tasks.Task;

namespace ProjectsSystemApi.Controllers
{
    public class SubtasksController : ApiController
    {
        private readonly ISubtasksManager _subtasksManager;

        public SubtasksController(ISubtasksManager subtasksManager)
        {
            _subtasksManager = subtasksManager;
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
            return await _subtasksManager.GetSubtaskAsync(id);
        }

        // POST api/<controller>
        [System.Web.Http.Route("api/tasks/{id}/subtasks/")]
        public async Task<SubtaskModel> PostSubtask(int id, [FromBody]SubtaskModel subtask)
        {
            return await _subtasksManager.AddSubtaskAsync(id, subtask);
        }

        // PUT api/<controller>/5
        public async Task<SubtaskModel> PutSubtask([FromBody]SubtaskModel subtask)
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