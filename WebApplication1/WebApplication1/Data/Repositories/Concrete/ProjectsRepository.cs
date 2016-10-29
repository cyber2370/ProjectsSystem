using System;
using System.Linq;
using System.Linq.Expressions;
using WebApplication1.Data.DB;
using WebApplication1.Data.DB.Entities;

namespace WebApplication1.Data.Repositories.Concrete
{
    public class ProjectsRepository : CrudRepositoryBase<Project, int>, IProjectsRepository
    {
        public ProjectsRepository(ApplicationDbContext dbContext) 
            : base(dbContext, dbContext.Projects)
        {
        }

        public async System.Threading.Tasks.Task UpdateItemAsync(Project project)
        {
            var projectToUpdate = Queryable.Single(p => project.Id == p.Id);

            projectToUpdate = project;

            await SaveChangesAsync();
        }

        protected override Expression<Func<Project, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}