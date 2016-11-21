using AutoMapper;

namespace ProjectsSystemApi
{
    public class MapperInitializer
    {
        public static void Initialize() =>
            Mapper.Initialize(cfg => 
            {
                    cfg.CreateMap<Managers.Models.ProjectModel, ProjectsSystemApi.Models.ProjectModel>()
                        .ReverseMap();

                    cfg.CreateMap<Managers.Models.TaskModel, ProjectsSystemApi.Models.TaskModel>()
                        .ReverseMap();

                    cfg.CreateMap<Managers.Models.SubtaskModel, ProjectsSystemApi.Models.SubtaskModel>()
                        .ReverseMap();
            });
    }
}