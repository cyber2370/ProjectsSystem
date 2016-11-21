using System;
using FluentValidation.Attributes;
using ProjectsSystemApi.Validators;

namespace ProjectsSystemApi.Models
{
    [Validator(typeof(SubtaskModelValidator))]
    public class SubtaskModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTimeOffset Duration { get; set; }

        public int TaskId { get; set; }
        public TaskModel Task { get; set; }
    }
}
