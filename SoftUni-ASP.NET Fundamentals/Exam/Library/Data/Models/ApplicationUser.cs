using Microsoft.AspNetCore.Identity;

namespace Library.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            ApplicationUsersBooks = new List<ApplicationUserBook>();
        }
        public ICollection<ApplicationUserBook> ApplicationUsersBooks { get; set; }
    }
}
