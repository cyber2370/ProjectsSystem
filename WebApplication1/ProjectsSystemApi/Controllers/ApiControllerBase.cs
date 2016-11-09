using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectsSystemApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public abstract class ApiControllerBase : ApiController
    {

    }
}