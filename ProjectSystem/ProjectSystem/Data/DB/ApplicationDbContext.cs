using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ProjectSystem.Data.DB
{
    public class ApplicationDbContext : DbContext
    {

        protected override void OnModelCreating(ModuleBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}