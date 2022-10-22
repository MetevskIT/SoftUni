using System.ComponentModel.DataAnnotations;

namespace Library.Data.Models
{
    public class Category
    {
        public Category()
        {
            Books = new List<Book>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50,MinimumLength =5)]
        public string Name { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
