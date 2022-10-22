using Library.Models;
using Library.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Library.Controllers
{
    [Authorize]
    public class BooksController : Controller
    {
        private IBooksService booksService;
        public BooksController(IBooksService booksService)
        {
            this.booksService = booksService;
        }

        [HttpGet]
        public async Task<IActionResult> All()
        {
            var books = await booksService.GetAllBooksAsync();
            return View(books);
        }

        [HttpGet]
        public async Task<IActionResult> Add()
        {
            var model = new AddBookViewModel()
            {
                Categories = await booksService.GetCategories()
            };
            return View(model);

        }

        [HttpPost]
        public async Task<IActionResult> Add(AddBookViewModel model)
        {
            if (!ModelState.IsValid)
            {
                model.Categories = await booksService.GetCategories();
                return View(model);
            }
            try
            {
                await booksService.AddBookAsync(model);
                return RedirectToAction("All", "Books");
            }
            catch (Exception)
            {

                ModelState.AddModelError("", "Error!");
                return View(model);
            }
            
        }

        [HttpGet]
        public async Task<IActionResult> Mine()
        {
            try
            {
                var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

                var books = await booksService.GetMineBooksAsync(userId);
                return View(books);
            }
            catch (Exception)
            {

                throw;
            }
           
        }

        public async Task<IActionResult> AddToCollection(int bookId)
        {
            try
            {
                var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
                await booksService.AddBookToCollectionAsync(userId,bookId);
            }
            catch (Exception)
            {
                throw;
            }

            return RedirectToAction("All", "Books");
        }
        
        public async Task<IActionResult> RemoveFromCollection(int bookId)
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            await booksService.RemoveBookFromCollectionAsync(userId,bookId);

            return RedirectToAction("Mine","Books");
        }
    }
}
