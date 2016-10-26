using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ProjectSystem.Startup))]

namespace ProjectSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
