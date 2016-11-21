using FluentValidation;
using ProjectsSystemApi.Models;

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