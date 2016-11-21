using FluentValidation;
using ProjectsSystemApi.Models;

namespace ProjectsSystemApi.Validators
{
    public class ProjectModelValidator : AbstractValidator<ProjectModel>
    {
        public ProjectModelValidator()
        {
            RuleFor(project => project.Name).NotEmpty();
            RuleFor(project => project.Owner).NotEmpty();
        }
    }
}