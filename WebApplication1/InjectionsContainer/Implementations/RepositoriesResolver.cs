using InjectionsContainer.Interfaces;
using Repositories.Interfaces;

namespace InjectionsContainer.Implementations
{
    class RepositoriesResolver : ResolverBase, IRepositoriesResolver
    {
        public IProjectsRepository GetProjectsRepository()
        {
            return GetService<IProjectsRepository>();
        }

        public ITasksRepository GetTasksRepository()
        {
            return GetService<ITasksRepository>();
        }

        public ISubtasksRepository GetSubtasksRepository()
        {
            return GetService<ISubtasksRepository>();
        }
    }
}
