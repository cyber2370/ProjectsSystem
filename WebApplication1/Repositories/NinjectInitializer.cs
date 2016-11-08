using DatabaseStorage.Data;
using Ninject.Modules;
using Repositories.Implementations;
using Repositories.Interfaces;

namespace Repositories
{
    internal class NinjectInitializer : NinjectModule
    {
        public override void Load()
        {
            this.Bind<ApplicationDbContext>().ToSelf();

            Bind<IProjectsRepository>().To<ProjectsRepository>();
            Bind<ITasksRepository>().To<TasksRepository>();
            Bind<ISubtasksRepository>().To<SubtasksRepository>();
        }
    }
}
