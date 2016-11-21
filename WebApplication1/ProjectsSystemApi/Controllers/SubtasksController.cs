using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Managers.Interfaces;
using SubtaskModel = ProjectsSystemApi.Models.SubtaskModel;
using ManagerSubtaskModel = Managers.Models.SubtaskModel;
using System.Net;

namespace ProjectsSystemApi.Controllers
{
    public class SubtasksController : ApiControllerBase
    {
        private readonly ISubtasksManager _subtasksManager;

        public SubtasksController(ISubtasksManager subtasksManager)
        {
            _subtasksManager = subtasksManager;
        }

        // GET api/<controller>
        public async Task<IEnumerable<SubtaskModel>> GetSubtasks()
        {
            return Mapper.Map<IEnumerable<ManagerSubtaskModel>, IEnumerable<SubtaskModel>>(await _subtasksManager.GetSubtasksAsync());
        }

        // GET api/tasks/project/{id}
        [Route("api/tasks/{id}/subtasks/")]
        public async Task<IEnumerable<SubtaskModel>> GetSubtasksByTaskId(int id)
        {
            return Mapper.Map<IEnumerable<ManagerSubtaskModel>, IEnumerable<SubtaskModel>>(await _subtasksManager.GetSubtasksByTaskIdAsync(id));
        }

        // GET api/<controller>/5
        public async Task<SubtaskModel> GetSubtask(int id)
        {
            ManagerSubtaskModel subtaskModel = await _subtasksManager.GetSubtaskAsync(id);

            if (subtaskModel == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return Mapper.Map<ManagerSubtaskModel, SubtaskModel>(subtaskModel);
        }

        // POST api/<controller>
        [Route("api/tasks/{id}/subtasks/")]
        public async Task<SubtaskModel> PostSubtask(int id, [FromBody]SubtaskModel subtask)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerSubtaskModel subtaskModel = Mapper.Map<SubtaskModel, ManagerSubtaskModel>(subtask);

            return Mapper.Map<ManagerSubtaskModel, SubtaskModel>(await _subtasksManager.AddSubtaskAsync(id, subtaskModel));
        }

        // PUT api/<controller>/5
        public async Task<SubtaskModel> PutSubtask([FromBody]SubtaskModel subtask)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpRequestException("Invalid model");
            }

            ManagerSubtaskModel subtaskModel = Mapper.Map<SubtaskModel, ManagerSubtaskModel>(subtask);

            return Mapper.Map<ManagerSubtaskModel, SubtaskModel>(await _subtasksManager.UpdateSubtaskAsync(subtaskModel));
        }

        // DELETE api/<controller>/5
        public async Task DeleteSubtask(int id)
        {
            await _subtasksManager.RemoveSubtaskAsync(id);
        }
    }
}