using Watchlist.Data.Models;
using Watchlist.Models;

namespace Watchlist.Services
{
    public interface IMovieService
    {
        Task<IEnumerable<MovieViewModel>> GetAllAsync();

        Task<IEnumerable<Genre>> GetGenresAsync();

        Task AddMovieAsync(AddMovieViewModel model);

        Task<IEnumerable<MovieViewModel>> GetWatchedMovies(string userId);

        Task AddToWatchCollection(string userId,int movieId);

        Task RemoveWatchCollection(string userId, int movieId);
    }
}
