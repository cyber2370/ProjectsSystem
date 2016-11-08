using Ninject;

namespace InjectionsContainer.Implementations
{
    public abstract class ResolverBase
    {
        private readonly IKernel _dependenciesResolver;

        public ResolverBase()
        {
            _dependenciesResolver = new StandardKernel();
        }

        protected T GetService<T>()
        {
            return _dependenciesResolver.Get<T>();
        }
    }
}
