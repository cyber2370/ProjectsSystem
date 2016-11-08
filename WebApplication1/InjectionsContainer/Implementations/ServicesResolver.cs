using InjectionsContainer.Interfaces;
using Managers.Interfaces;

namespace InjectionsContainer.Implementations
{
    class ServicesResolver : ResolverBase, IServicesResolver
    {
        public IProjectsManager GetProjectsManager()
        {
            return GetService<IProjectsManager>();
        }

        public ITasksManager GetTasksManager()
        {
            return GetService<ITasksManager>();
        }

        public ISubtasksManager GetSubtasksManager()
        {
            return GetService<ISubtasksManager>();
        }
    }
}
