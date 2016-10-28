using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
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

        protected override Expression<Func<Project, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}