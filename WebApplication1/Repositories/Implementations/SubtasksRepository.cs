using System;
using System.Linq.Expressions;
using DatabaseStorage.Data;
using DatabaseStorage.Entities;
using Repositories.Interfaces;

namespace Repositories.Implementations
{
    public class SubtasksRepository : CrudRepositoryBase<Subtask, int>, ISubtasksRepository
    {
        public SubtasksRepository(ApplicationDbContext dbContext) 
            : base(dbContext, dbContext.Subtasks)
        {
        }

        protected override Expression<Func<Subtask, bool>> KeyPredicate(int id) => (it => it.Id == id);
    }
}