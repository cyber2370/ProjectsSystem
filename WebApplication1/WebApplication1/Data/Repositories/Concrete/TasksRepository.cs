using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApplication1.Data.DB;
using WebApplication1.Data.DB.Entities;

namespace WebApplication1.Data.Repositories.Concrete
{
    public class TasksRepository : CrudRepositoryBase<Task, int>, ITasksRepository
    {
        public TasksRepository(ApplicationDbContext dbContext)
            : base(dbContext, dbContext.Tasks)
        {
        }

        public async System.Threading.Tasks.Task UpdateItemAsync(Task task)
        {
            var taskToUpdate = Queryable.Single(t => task.Id == t.Id);

            taskToUpdate.Name = task.Name;
            taskToUpdate.Description = task.Description;
            
            await SaveChangesAsync();
        }

        protected override Expression<Func<Task, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}