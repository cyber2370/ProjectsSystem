using System;
using System.Linq.Expressions;
using DatabaseStorage.Data;
using DatabaseStorage.Entities;
using Repositories.Interfaces;

namespace Repositories.Implementations
{
    public class ProjectsRepository : CrudRepositoryBase<Project, int>, IProjectsRepository
    {
        public ProjectsRepository(ApplicationDbContext dbContext) 
            : base(dbContext, dbContext.Projects)
        {
        }

        protected override Expression<Func<Project, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}