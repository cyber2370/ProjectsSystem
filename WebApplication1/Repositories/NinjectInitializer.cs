using DatabaseStorage.Data;
using Ninject;
using Repositories.Implementations;
using Repositories.Interfaces;

namespace Repositories
{
    public class NinjectInitializer
    {
        public static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<ApplicationDbContext>().ToSelf();

            kernel.Bind<IProjectsRepository>().To<ProjectsRepository>();
            kernel.Bind<ITasksRepository>().To<TasksRepository>();
            kernel.Bind<ISubtasksRepository>().To<SubtasksRepository>();
        }
    }
}
