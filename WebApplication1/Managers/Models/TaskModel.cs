using DatabaseStorage.Entities;

namespace Managers.Models
{
    public class TaskModel
    {
        public TaskModel()  { }

        internal TaskModel(Task task)
        {
            Id = task.Id;
            Name = task.Name;
            Description = task.Description;

            ProjectId = task.ProjectId;
            Project = task.Project;
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
