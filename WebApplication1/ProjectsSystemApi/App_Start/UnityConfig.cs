using Microsoft.Practices.Unity;
using System.Web.Http;
using Managers.Implementations;
using Managers.Interfaces;
using Microsoft.Practices.ServiceLocation;
using Unity.WebApi;

namespace ProjectsSystemApi
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<IProjectsManager, ProjectsManager>();
            container.RegisterType<ITasksManager, TasksManager>();
            container.RegisterType<ISubtasksManager, SubtasksManager>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}