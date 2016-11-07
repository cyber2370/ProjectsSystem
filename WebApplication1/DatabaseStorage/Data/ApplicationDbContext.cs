using System.Data.Entity;
using DatabaseStorage.Entities;

namespace DatabaseStorage.Data
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Project> Projects { get; set; }

        public virtual DbSet<Task> Tasks { get; set; }

        public virtual DbSet<Subtask> Subtasks { get; set; }
    }
}