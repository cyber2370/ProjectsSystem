using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebApplication1.Data.Repositories;
using WebApplication1.Data.Repositories.Concrete;
using WebApplication1.Managers;
using WebApplication1.Managers.Concrete;

namespace WebApplication1
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            InitializeUnity();
        }

        public IUnityContainer InitializeUnity()
        {
            var container = BuildUnityContainer();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));

            return container;
        }

        private IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();
            
            container.RegisterType<IProjectsRepository, ProjectsRepository>();
            container.RegisterType<ITasksRepository, TasksRepository>();
            container.RegisterType<ISubtasksRepository, SubtasksRepository>();

            container.RegisterType<IProjectsManager, ProjectsManager>();
            container.RegisterType<ITasksManager, TasksManager>();
            container.RegisterType<ISubtasksManager, SubtasksManager>();

            //RegisterTypes(container);
            return container;
        }
    }
}
