using Library.Data.Models;
using Library.Models;

namespace Library.Services
{
    public interface IBooksService
    {
        Task<ICollection<BooksViewModel>> GetAllBooksAsync();
        Task<ICollection<BooksViewModel>> GetMineBooksAsync(string userId);
        Task<ICollection<Category>> GetCategories();
        Task AddBookToCollectionAsync(string userId, int bookId);
        Task RemoveBookFromCollectionAsync(string userId, int bookId);
        Task AddBookAsync(AddBookViewModel model);
    }
}
