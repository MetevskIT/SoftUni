namespace BookShop
{
    using BookShop.Models.Enums;
    using Data;
    using Initializer;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Text;

    public class StartUp
    {
        public static void Main()

        {
            using var db = new BookShopContext();
            //DbInitializer.ResetDatabase(db);

            //Problem 02 - Age Restriction 
            //string command = Console.ReadLine();
            //Console.WriteLine(GetBooksByAgeRestriction(db,command));

            //Problem 03 - Golden Books
            //Console.WriteLine(GetGoldenBooks(db));

            //Problem 04 - Books by Price
            //Console.WriteLine(GetBooksByPrice(db));

            //Problem 05 - Not Released In
            //int year = int.Parse(Console.ReadLine());
            //Console.WriteLine(GetBooksNotReleasedIn(db,year));

            //Problem 06 - Book Titles by Category
            //string input = Console.ReadLine();
            //Console.WriteLine(GetBooksByCategory(db,input));

            //Problem 07 - Released Before Date
            //string date = Console.ReadLine();
            //Console.WriteLine(GetBooksReleasedBefore(db,date));

            //Problem 08 - Author Search
            //string input = Console.ReadLine();
            //Console.WriteLine(GetAuthorNamesEndingIn(db, input));

            //Problem 09 - Book Search
            //string input = Console.ReadLine();
            //Console.WriteLine(GetBookTitlesContaining(db,input));


            //Problem 10 - Book Search by Author
            //string input = Console.ReadLine();
            //Console.WriteLine(GetBooksByAuthor(db,input));

            //Problem 11 - Count Books
            //int lengthCheck = int.Parse(Console.ReadLine());
            //Console.WriteLine(CountBooks(db,lengthCheck));

            //Problem 12 - Total Book Copies
            //Console.WriteLine(CountCopiesByAuthor(db));

            //Problem 13 - Profit by Category
            //Console.WriteLine(GetTotalProfitByCategory(db));

            //Problem 14 - Most Recent Books
            //Console.WriteLine(GetMostRecentBooks(db));

            //Problem 15 - Increase Prices
            //IncreasePrices(db)

            //Problem 16 - Remove Books
            //Console.WriteLine(RemoveBooks(db));

        }

        public static string GetBooksByAgeRestriction(BookShopContext context, string command)
        {
            StringBuilder output
                = new StringBuilder();

            AgeRestriction ageRestriction;

            bool validRestriction= Enum.TryParse<AgeRestriction>(command,true,out ageRestriction);

            if (!validRestriction)
            {
                return "Not valid";
            }
            var books = context.Books
                .Where(b=>b.AgeRestriction==ageRestriction)
                .OrderBy(b=>b.Title)
                .ToList();
            foreach (var book in books)
            {
                output.AppendLine($"{book.Title}");
            }

            return output.ToString().TrimEnd();

        }

        public static string GetGoldenBooks(BookShopContext context)
        {
            StringBuilder output
                  = new StringBuilder();

            var books = context.Books
                .Where(b => b.Copies < 5000 && b.EditionType==EditionType.Gold)
                .OrderBy(b=>b.BookId)
                .ToList();

            foreach (var book in books)
            {
                output.AppendLine(book.Title);
            }
            return output.ToString().TrimEnd();
        }

        public static string GetBooksByPrice(BookShopContext context)
        {
            StringBuilder output
                      = new StringBuilder();

            var books = context.Books
                .Where(b => b.Price > 40)
                .OrderByDescending(b => b.Price)
                .ToArray();

            foreach (var book in books)
            {
                output.AppendLine($"{book.Title} - ${book.Price:F2}");
            }

            return output.ToString().TrimEnd();
        }

        public static string GetBooksNotReleasedIn(BookShopContext context, int year)
        {
            var books = context.Books
                    .Where(b => b.ReleaseDate.Value.Year != year)
                    .OrderBy(b => b.BookId)
                    .ToArray();

            return String.Join(Environment.NewLine, books.Select(b=>b.Title));

        }

        public static string GetBooksByCategory(BookShopContext context, string input)
        {
            string[] categories = input.ToLower().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();

            var books = context.Books
                .Where(b => b.BookCategories.Any(c => categories.Contains(c.Category.Name.ToLower())))
                .OrderBy(b => b.Title)
                .ToArray();

            return String.Join(Environment.NewLine, books.Select(x=>x.Title));

        }

        public static string GetBooksReleasedBefore(BookShopContext context, string date)
        {
            StringBuilder output = new StringBuilder();

            var books = context.Books
                .Where(b => b.ReleaseDate < DateTime.ParseExact(date, "dd-MM-yyyy",CultureInfo.InvariantCulture))
                .Select(b => new
                {
                    title = b.Title,
                    editionType = b.EditionType,
                    price = b.Price,
                    releaseDate = b.ReleaseDate
                })
                .OrderByDescending(b => b.releaseDate)
                .ToArray();

            foreach (var book in books)
            {
                output.AppendLine($"{book.title} - {book.editionType} - ${book.price:F2}");
            }

            return output.ToString().TrimEnd();
        }

        public static string GetAuthorNamesEndingIn(BookShopContext context, string input)
        {

            var authors = context.Authors
                .Where(a => a.FirstName.ToLower().EndsWith(input.ToLower()))
                .Select(a => $"{a.FirstName} {a.LastName}")
                .ToArray()
                .OrderBy(a => a);

            return String.Join(Environment.NewLine, authors);
        }

        public static string GetBookTitlesContaining(BookShopContext context, string input)
        {

            var books = context.Books
                .Where(b => b.Title.ToLower().Contains(input.ToLower()))
                .Select(b => b.Title)
                .OrderBy(b => b)
                .ToArray();

            return String.Join(Environment.NewLine, books);
        }

        public static string GetBooksByAuthor(BookShopContext context, string input)
        {
            var books = context.Books
                .Include(b => b.Author)
                .Where(b => b.Author.LastName.ToLower()
                           .StartsWith(input.ToLower()))
                .Select(b => new
                {
                    Title = b.Title,
                    AuthorName = $"{b.Author.FirstName} {b.Author.LastName}",
                    BookId = b.BookId
                })
                .OrderBy(b => b.BookId)
                .ToArray();

           return String.Join(Environment.NewLine, books.Select(b => $"{b.Title} ({b.AuthorName})"));
        }

        public static int CountBooks(BookShopContext context, int lengthCheck)
        {

            var count = context.Books
                .Where(b => b.Title.Length > lengthCheck)
                .Count();
            return count;
        }

        public static string CountCopiesByAuthor(BookShopContext context)
        {
            var authors = context.Authors
                  .Select(a => new
                  {
                      authorName = $"{a.FirstName} {a.LastName}",
                      copiesCount = a.Books.Select(b => b.Copies).Sum()
                  })
                  .ToArray()
                  .OrderByDescending(a=>a.copiesCount);

            return String.Join(Environment.NewLine, authors.Select(a => $"{a.authorName} - {a.copiesCount}"));
        }

        public static string GetTotalProfitByCategory(BookShopContext context)
        {

            var total = context.Categories
                .Select(b => new
                {
                    categoryName = b.Name,
                    totalProfit = b.CategoryBooks.Sum(b => b.Book.Copies * b.Book.Price)
                })
                .OrderByDescending(b => b.totalProfit)
                .ThenBy(b => b.categoryName)
                .ToArray();

            return String.Join(Environment.NewLine, total.Select(t => $"{t.categoryName} ${t.totalProfit:f2}"));
        }

        public static string GetMostRecentBooks(BookShopContext context)
        {
            StringBuilder output 
                        = new StringBuilder();

            var categories = context.Categories
                          .Select(c => new
                          {
                              categoryName = c.Name,
                              books = c.CategoryBooks
                                   .Select(b=>b.Book)
                                   .OrderByDescending(b => b.ReleaseDate)
                                   .Take(3)
                                   .ToArray()
                          })
                          .OrderBy(c => c.categoryName)
                          .ToArray();

            foreach (var category in categories)
            {
                output.AppendLine($"--{category.categoryName}");

                foreach (var book in category.books)
                {
                    output.AppendLine($"{book.Title} ({book.ReleaseDate.Value.Year})");
                }
            }

            return output.ToString().TrimEnd();
        }

        public static void IncreasePrices(BookShopContext context)
        {
              context.Books
                 .Where(b => b.ReleaseDate.Value.Year < 2010)
                 .ToList()
                 .ForEach(b => b.Price += 5);

            context.SaveChanges();
     
        }

        public static int RemoveBooks(BookShopContext context)
        {

            var books = context.Books
                .Where(b => b.Copies < 4200)
                .ToList();

            context.Books.RemoveRange(books);
            context.SaveChanges();

            return books.Count();
        }
    }
}
 