using Repositories.Interfaces;

namespace InjectionsContainer.Interfaces
{
    public interface IRepositoriesResolver
    {
        IProjectsRepository GetProjectsRepository();

        ITasksRepository GetTasksRepository();

        ISubtasksRepository GetSubtasksRepository();
    }
}
