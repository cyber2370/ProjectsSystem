using Managers.Implementations;
using Managers.Interfaces;
using Ninject.Modules;
using Repositories.Implementations;
using Repositories.Interfaces;

namespace Repositories
{
    internal class NinjectInitializer : NinjectModule
    {
        public override void Load()
        {
            Bind<IProjectsRepository>().To<ProjectsRepository>();
            Bind<ITasksRepository>().To<TasksRepository>();
            Bind<ISubtasksRepository>().To<SubtasksRepository>();

            Bind<IProjectsManager>().To<ProjectsManager>();
            Bind<ITasksManager>().To<TasksManager>();
            Bind<ISubtasksManager>().To<SubtasksManager>();
        }
    }
}
