using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Data.DB.Entities
{
    public class Task
    {
        public int Id { get; set; }

        public string Name { get ; set; }

        public string Description { get; set; }

        public Project Project { get; set; }

        public IList<Subtask> Subtasks { get; set; } 
    }
}