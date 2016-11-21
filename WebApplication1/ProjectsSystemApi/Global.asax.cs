

using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using FluentValidation.WebApi;

namespace ProjectsSystemApi
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            MapperInitializer.Initialize();
            GlobalConfiguration.Configuration.Services.Add(typeof(System.Web.Http.Validation.ModelValidatorProvider), new FluentValidationModelValidatorProvider());
        }
    }
}
