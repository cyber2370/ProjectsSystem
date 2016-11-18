using FluentValidation;
using Managers.Models;

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