using FluentValidation;
using Managers.Models;

namespace ProjectsSystemApi.Validators
{
    public class SubtaskModelValidator : AbstractValidator<SubtaskModel>
    {
        public SubtaskModelValidator()
        {
            RuleFor(subtask => subtask.Name).NotEmpty();

            RuleFor(subtask => subtask.Description).NotEmpty();
        }
    }
}