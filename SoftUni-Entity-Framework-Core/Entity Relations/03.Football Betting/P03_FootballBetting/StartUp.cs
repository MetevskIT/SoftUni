using Microsoft.EntityFrameworkCore;
using P03_FootballBetting.Data;
using System;

namespace P03_FootballBetting
{
    internal class StartUp
    {
        static void Main(string[] args)
        {
           using FootballBettingContext footballBettingContext = new FootballBettingContext();

            footballBettingContext.Database.EnsureCreated();
        }
    }
}
