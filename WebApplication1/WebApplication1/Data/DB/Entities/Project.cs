using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Data.DB.Entities
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }

        public IList<Task> Tasks { get; set; }
    }
}