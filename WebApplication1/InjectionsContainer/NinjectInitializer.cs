using DatabaseStorage.Data;
using Managers.Implementations;
using Managers.Interfaces;
using Ninject.Modules;
using Repositories.Implementations;
using Repositories.Interfaces;

namespace InjectionsContainer
{
    internal class NinjectInitializer : NinjectModule
    {
        public override void Load()
        {
            /*this.Bind<ApplicationDbContext>().ToSelf();

            Bind<IProjectsRepository>().To<ProjectsRepository>();
            Bind<ITasksRepository>().To<TasksRepository>();
            Bind<ISubtasksRepository>().To<SubtasksRepository>();

            Bind<IProjectsManager>().To<ProjectsManager>();
            Bind<ITasksManager>().To<TasksManager>();
            Bind<ISubtasksManager>().To<SubtasksManager>();*/
        }
    }
}
