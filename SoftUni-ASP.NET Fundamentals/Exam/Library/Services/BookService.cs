using Library.Data;
using Library.Data.Models;
using Library.Models;
using Microsoft.EntityFrameworkCore;

namespace Library.Services
{
    public class BookService : IBooksService
    {
        private readonly LibraryDbContext context;

        public BookService(LibraryDbContext context)
        {
            this.context = context;
        }

        public async Task AddBookAsync(AddBookViewModel model)
        {
            var book = new Book()
            {
                Title = model.Title,
                Description = model.Description,
                Author = model.Author,
                Rating = model.Rating,
                CategoryId = model.CategoryId,
                ImageUrl = model.ImageUrl,
            };
            await context.Books.AddAsync(book);
            await context.SaveChangesAsync();

        }

        public  async Task AddBookToCollectionAsync(string userId, int bookId)
        {
            var user = await context.Users
                 .Where(u => u.Id == userId)
                 .Include(u => u.ApplicationUsersBooks)
                 .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentException("Invalid user ID");
            }

            var book = await context.Books.FirstOrDefaultAsync(u => u.Id == bookId);

            if (book == null)
            {
                throw new ArgumentException("Invalid Movie ID");
            }

            if (!user.ApplicationUsersBooks.Any(m => m.BookId == bookId))
            {
                user.ApplicationUsersBooks.Add(new ApplicationUserBook()
                {
                    BookId = book.Id,
                    ApplicationUserId = user.Id,
                    Book = book,
                    ApplicationUser = user
                });

                await context.SaveChangesAsync();
            }
        }

        public async Task<ICollection<BooksViewModel>> GetAllBooksAsync()
        {
            var movies = await context
                .Books
                .Select(b => new BooksViewModel()
                {
                    Id = b.Id,
                    Author = b.Author,
                    Title = b.Title,
                    Rating = b.Rating,
                    Category = b.Category.Name,
                    ImageUrl = b.ImageUrl
                }).ToListAsync();

            return movies;
        }

        public async Task<ICollection<Category>> GetCategories()
        {
            return await context.Categories.ToListAsync();
        }

        public async Task<ICollection<BooksViewModel>> GetMineBooksAsync(string userId)
        {
         var user = await context.Users.Where(u=>u.Id==userId)
                .Include(b=>b.ApplicationUsersBooks)
                .ThenInclude(m=>m.Book)
                .ThenInclude(c=>c.Category)
                .FirstOrDefaultAsync();

            if (user==null)
            {
                throw new NullReferenceException("User is not found!");
            }
            var books = user
                .ApplicationUsersBooks
                .Select(b => new BooksViewModel()
                {
                   Author = b.Book.Author,
                   Category = b.Book.Category.Name,
                   Rating = b.Book.Rating,
                   Title = b.Book.Title,
                   ImageUrl = b.Book.ImageUrl,
                   Description = b.Book.Description,
                   Id = b.Book.Id

                }).ToList();

            return books;
            
        }

        public async Task RemoveBookFromCollectionAsync(string userId, int bookId)
        {
            var user = await context.Users
               .Where(u => u.Id == userId)
               .Include(u => u.ApplicationUsersBooks)
               .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentException("Invalid user ID");
            }

            var movie = user.ApplicationUsersBooks.FirstOrDefault(b => b.BookId == bookId);

            if (movie != null)
            {
                user.ApplicationUsersBooks.Remove(movie);

                await context.SaveChangesAsync();
            }
        }
    }
}
