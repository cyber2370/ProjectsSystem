using FluentValidation.Attributes;
using ProjectsSystemApi.Validators;

namespace ProjectsSystemApi.Models
{
    [Validator(typeof(TaskModelValidator))]
    public class TaskModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ProjectId { get; set; }
        public ProjectModel Project { get; set; }
    }
}
