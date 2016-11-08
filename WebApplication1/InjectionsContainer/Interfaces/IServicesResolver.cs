using Managers.Interfaces;

namespace InjectionsContainer.Interfaces
{
    public interface IServicesResolver
    {
        IProjectsManager GetProjectsManager();

        ITasksManager GetTasksManager();

        ISubtasksManager GetSubtasksManager();
    }
}
