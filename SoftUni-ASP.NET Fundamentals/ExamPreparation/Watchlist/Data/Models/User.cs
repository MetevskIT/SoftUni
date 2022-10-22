using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Watchlist.Data.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            UsersMovies = new List<UserMovie>();
        }
        public ICollection<UserMovie> UsersMovies { get; set; }
    }
}
