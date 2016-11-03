﻿using System;
using System.Collections.Generic;
using System.Drawing.Text;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Data.DB.Entities;

using Task = System.Threading.Tasks.Task;

namespace WebApplication1.Data.Repositories
{
    public interface IProjectsRepository : ICrudRepositoryBase<Project, int>
    {
    }
}
