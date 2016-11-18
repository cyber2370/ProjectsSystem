using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DatabaseStorage.Entities;
using Managers.Models;

using Task = DatabaseStorage.Entities.Task;

namespace Managers.Extensions
{
    internal static class TypesExtensions
    {
        public static ProjectModel ToProjectModel(this Project project)
        {
            return new ProjectModel(project);
        }
        public static Project ToProject(this ProjectModel projectModel)
        {
            return new Project
            {
                Id = projectModel.Id,
                Name = projectModel.Name,
                Owner = projectModel.Owner
            };
        }

        public static TaskModel ToTaskModel(this Task task)
        {
            return new TaskModel(task);
        }
        public static Task ToTask(this TaskModel taskModel)
        {
            return new Task
            {
                Id = taskModel.Id,
                Name = taskModel.Name,
                Description = taskModel.Description,
                Project = taskModel.Project,
                ProjectId = taskModel.ProjectId
            };
        }

        public static SubtaskModel ToSubtaskModel(this Subtask subtask)
        {
            return new SubtaskModel(subtask);
        }

        public static Subtask ToSubtask(this SubtaskModel subtaskModel)
        {
            return new Subtask
            {
                Id = subtaskModel.Id,
                Name = subtaskModel.Name,
                Description = subtaskModel.Description,
                Duration = subtaskModel.Duration,
                TaskId = subtaskModel.TaskId,
                Task = subtaskModel.Task
            };
        }
    }
}
