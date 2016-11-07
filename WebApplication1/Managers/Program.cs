using System.Web.Mvc;
using Microsoft.Practices.Unity;

namespace Managers
{
    class Program
    {
        static void Main(string[] args)
        {
            ConfigUnity();
        }

        private static void ConfigUnity()
        {
            var container = UnityConfig.GetConfiguredContainer();

            DependencyResolver.SetResolver(new UnityServiceLocator(container));
        }
    }
}
