using FluentValidation;
using ProjectsSystemApi.Models;

namespace ProjectsSystemApi.Validators
{
    public class TaskModelValidator : AbstractValidator<TaskModel>
    {
        public TaskModelValidator()
        {
            RuleFor(task => task.Name).NotEmpty();
            RuleFor(task => task.Description).NotEmpty();
        }
    }
}