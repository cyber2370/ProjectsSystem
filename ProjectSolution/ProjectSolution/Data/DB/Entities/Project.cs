using System.Collections.Generic;

namespace ProjectSolution.Data.DB.Entities
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string OwnerName { get; set; }

        public IList<Task> Tasks { get; set;} 
    }
}