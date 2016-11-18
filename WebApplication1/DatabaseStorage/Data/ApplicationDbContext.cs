using System.Data.Entity;
using System.Data.SqlClient;
using DatabaseStorage.Entities;

namespace DatabaseStorage.Data
{
    public class ApplicationDbContext : DbContext
    {
        private const string ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog = ProjectsSystemDb; Integrated Security = True; Connect Timeout = 30; Encrypt=False; TrustServerCertificate=True; ApplicationIntent=ReadWrite; MultiSubnetFailover=False";

        public ApplicationDbContext() : base(ConnectionString)
        {

        }

        public virtual DbSet<Project> Projects { get; set; }

        public virtual DbSet<Task> Tasks { get; set; }

        public virtual DbSet<Subtask> Subtasks { get; set; }
    }
}