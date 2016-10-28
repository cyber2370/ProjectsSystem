using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Data.DB.Entities
{
    public class Subtask
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTimeOffset Duration { get; set; }

        public Task Task { get; set; }
    }
}