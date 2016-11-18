using Managers.Implementations;
using Managers.Interfaces;
using Ninject;

namespace Managers
{
    public class NinjectInitializer
    {
        public static void RegisterServices(IKernel kernel)
        {
            Repositories.NinjectInitializer.RegisterServices(kernel);

            kernel.Bind<IProjectsManager>().To<ProjectsManager>();
            kernel.Bind<ITasksManager>().To<TasksManager>();
            kernel.Bind<ISubtasksManager>().To<SubtasksManager>();
        }
    }
}
