using DatabaseStorage.Entities;

namespace Repositories.Interfaces
{
    public interface ITasksRepository : ICrudRepositoryBase<Task, int>
    {
    }
}