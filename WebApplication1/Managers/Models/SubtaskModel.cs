using System;
using DatabaseStorage.Entities;
using Task = DatabaseStorage.Entities.Task;

namespace Managers.Models
{
    public class SubtaskModel
    {
        public SubtaskModel()   { }

        internal SubtaskModel(Subtask subtask)
        {
            Id = subtask.Id;
            Name = subtask.Name;
            Description = subtask.Description;
            Duration = subtask.Duration;

            Task = subtask.Task;
            TaskId = subtask.TaskId;
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTimeOffset Duration { get; set; }


        public int TaskId { get; set; }
        public Task Task { get; set; }
    }
}
