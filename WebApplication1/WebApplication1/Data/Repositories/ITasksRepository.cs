using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Data.DB.Entities;

namespace WebApplication1.Data.Repositories
{
    public interface ITasksRepository : ICrudRepositoryBase<Task, int>
    {
    }
}