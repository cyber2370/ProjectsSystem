using FluentValidation.Attributes;
using ProjectsSystemApi.Validators;

namespace ProjectsSystemApi.Models
{
    [Validator(typeof(ProjectModelValidator))]
    public class ProjectModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }
    }
}
