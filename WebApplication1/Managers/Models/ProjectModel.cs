using DatabaseStorage.Entities;

namespace Managers.Models
{
    public class ProjectModel
    {
        public ProjectModel()   { }

        internal ProjectModel(Project project)
        {
            Id = project.Id;
            Name = project.Name;
            Owner = project.Owner;
        }
        
        public int Id { get; set; }

        public string Name { get; set; }

        public string Owner { get; set; }
    }
}
