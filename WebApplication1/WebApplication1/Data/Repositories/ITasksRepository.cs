using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace WebApplication1.Data.Repositories
{
    public interface ITasksRepository : ICrudRepositoryBase<Task, int>
    {
    }
}