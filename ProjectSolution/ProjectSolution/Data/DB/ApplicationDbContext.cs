using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using ProjectSolution.Data.DB.Entities;

namespace ProjectSolution.Data.DB
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext() 
            : base("name=DbContext") 
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<Project> Projects { get; set; }

        public DbSet<Project> Tasks { get; set; }

        public DbSet<Project> Subtasks { get; set; }
    }
}