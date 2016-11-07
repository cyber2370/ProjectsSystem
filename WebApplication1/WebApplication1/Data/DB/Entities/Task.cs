using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Data.DB.Entities
{
    public class Task
    {
        public int Id { get; set; }

        public string Name { get ; set; }

        public string Description { get; set; }

        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}