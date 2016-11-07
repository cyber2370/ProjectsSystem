using System;

namespace DatabaseStorage.Entities
{
    public class Subtask
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTimeOffset Duration { get; set; }

        
        public int TaskId { get; set; }
        public Task Task { get; set; }
    }
}