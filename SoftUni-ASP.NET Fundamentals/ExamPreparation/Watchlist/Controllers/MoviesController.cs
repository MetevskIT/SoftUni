using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Watchlist.Data.Models;
using Watchlist.Models;
using Watchlist.Services;

namespace Watchlist.Controllers
{

    [Authorize]
    public class MoviesController : Controller
    {
        private readonly IMovieService movieService;

        public MoviesController(IMovieService movieService)
        {
            this.movieService = movieService;
        }

        [HttpGet]
        public async Task<IActionResult> All()
        {
            var model = await movieService.GetAllAsync();
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Add()
        {
            var model = new AddMovieViewModel()
            {
                Genres = await movieService.GetGenresAsync()
            };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Add(AddMovieViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            try
            {
                await movieService.AddMovieAsync(model);
                return RedirectToAction("All", "Movies");
            }
            catch (Exception)
            {

                ModelState.AddModelError("", "Error");
                return View(model);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Watched()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var model = await movieService.GetWatchedMovies(userId);
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> AddToCollection(int movieId)
        {
            try
            {
                var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

                await movieService.AddToWatchCollection(userId, movieId);

                return RedirectToAction("All", "Movies");
            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpPost]
        public async Task<IActionResult> RemoveFromCollection(int movieId)
        {
           
            try
            {
                var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

                await movieService.RemoveWatchCollection(userId, movieId);

                return RedirectToAction("Watched", "Movies");
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
