using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication1.Data.DB.Entities;

namespace WebApplication1.Data.DB
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Project> Projects { get; set; }

        public virtual DbSet<Task> Tasks { get; set; }

        public virtual DbSet<Subtask> Subtasks { get; set; }
    }
}