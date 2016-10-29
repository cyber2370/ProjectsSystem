using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApplication1.Data.DB;
using WebApplication1.Data.DB.Entities;

namespace WebApplication1.Data.Repositories.Concrete
{
    public class SubtasksRepository : CrudRepositoryBase<Subtask, int>, ISubtasksRepository
    {
        public SubtasksRepository(ApplicationDbContext dbContext) 
            : base(dbContext, dbContext.Subtasks)
        {
        }

        public async System.Threading.Tasks.Task UpdateItemAsync(Subtask subtask)
        {
            var subtaskToUpdate = Queryable.Single(t => subtask.Id == t.Id);

            subtaskToUpdate = subtask;

            await SaveChangesAsync();
        }

        protected override Expression<Func<Subtask, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}