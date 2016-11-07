using System;
using System.Linq.Expressions;
using DatabaseStorage.Data;
using DatabaseStorage.Entities;
using Repositories.Interfaces;

namespace Repositories.Implementations
{
    public class TasksRepository : CrudRepositoryBase<Task, int>, ITasksRepository
    {
        public TasksRepository(ApplicationDbContext dbContext)
            : base(dbContext, dbContext.Tasks)
        {
        }

        protected override Expression<Func<Task, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}