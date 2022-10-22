using Microsoft.EntityFrameworkCore;
using Watchlist.Data;
using Watchlist.Data.Models;
using Watchlist.Models;

namespace Watchlist.Services
{
    public class MovieService : IMovieService
    {
        private readonly WatchlistDbContext _context;

        public MovieService(WatchlistDbContext context)
        {
            _context = context;
        }

        public async Task AddMovieAsync(AddMovieViewModel model)
        {
            var movie = new Movie()
            {
                Title = model.Title,
                Director = model.Director,
                GenreId = model.GenreId,
                ImageUrl = model.ImageUrl,
                Rating = model.Rating
            };
            await _context.Movies.AddAsync(movie);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<MovieViewModel>> GetAllAsync()
        {
            var movies = await _context.Movies
                .Include(g => g.Genre)
                .ToListAsync();

            return movies
                .Select(m =>new MovieViewModel()
                {
                    Title = m.Title,
                    Director = m.Director,
                    ImageUrl = m.ImageUrl,
                    Genre = m.Genre.Name,
                    Id = m.Id,
                    Rating = m.Rating
                });
        }

        public async Task<IEnumerable<Genre>> GetGenresAsync()
        {
           return 
                await _context
                .Genres
                .ToListAsync();
        }

        public async Task<IEnumerable<MovieViewModel>> GetWatchedMovies(string userId)
        {
            var user = await _context.Users
                .Where(u=>u.Id==userId)
                .Include(um => um.UsersMovies)
                .ThenInclude(m=>m.Movie)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentNullException("Invalid userId!");
            }

            return user.UsersMovies
                .Select(um => new MovieViewModel
                {
                    Id=um.Movie.Id,
                    Title= um.Movie.Title,
                    Director= um.Movie.Director,
                    Genre=um.Movie.Genre?.Name,
                    ImageUrl=um.Movie.ImageUrl,
                    Rating=um.Movie.Rating
                })
                .ToList();
        }

        public async Task AddToWatchCollection(string userId, int movieId)
        {
            var user =await  _context.Users
                   .Include(u => u.UsersMovies)
                   .Where(u => u.Id == userId)
                   .FirstOrDefaultAsync();

            if (user==null)
            {
                throw new ArgumentNullException("Invalid userId!");
            }

            var movie = await _context
                    .Movies
                     .Where(u => u.Id == movieId)
                      .FirstOrDefaultAsync();

            if (movie==null)
            {
                throw new ArgumentNullException("Invalid movie!");
            }

            if (!user.UsersMovies.Any(m=>m.MovieId==movieId))
            {
                user.UsersMovies.Add(new UserMovie
                {
                    MovieId = movieId,
                    UserId = userId,
                    Movie = movie,
                    User = user

                });

               await _context.SaveChangesAsync();

            }
        }

        public async Task RemoveWatchCollection(string userId, int movieId)
        {
            var user = await _context.Users
                 .Include(u => u.UsersMovies)
                 .Where(u => u.Id == userId)
                 .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentNullException("Invalid userId!");
            }

            var movie = user.UsersMovies.FirstOrDefault(um => um.MovieId == movieId);


            if (movie == null)
            {
                throw new ArgumentNullException("Invalid movie!");
            }

            
                user.UsersMovies.Remove(movie);

                await _context.SaveChangesAsync();
            
        }
    }
}
