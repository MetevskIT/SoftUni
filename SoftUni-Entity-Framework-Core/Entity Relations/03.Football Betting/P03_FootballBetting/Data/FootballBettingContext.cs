using Microsoft.EntityFrameworkCore;
using P03_FootballBetting.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace P03_FootballBetting.Data
{
    public class FootballBettingContext : DbContext
    {

        public FootballBettingContext()
        {

        }


        public FootballBettingContext(DbContextOptions<FootballBettingContext> options) 
            : base(options)
        {

        }

        public virtual DbSet<Bet> Bets { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<Player> Players { get; set; }
        public virtual DbSet<PlayerStatistic> PlayerStatistics { get; set; }
        public virtual DbSet<Position> Positions { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<Town> Towns { get; set; }
        public virtual DbSet<User> Users { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Config.Connection);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PlayerStatistic>()
                           .HasKey(pk => new { pk.PlayerId, pk.GameId });

            modelBuilder.Entity<Game>()
                .HasOne(t => t.HomeTeam)
                .WithMany(ht => ht.HomeGames)
                .HasForeignKey(fk => fk.HomeTeamId);

            modelBuilder.Entity<Game>()
               .HasOne(t => t.AwayTeam)
               .WithMany(ht => ht.AwayGames)
               .HasForeignKey(fk => fk.AwayTeamId);

            //modelBuilder.Entity<Team>()
            //    .HasOne(pkc => pkc.PrimaryKitColor)
            //    .WithMany(p => p.PrimaryKitTeams)
            //    .HasForeignKey(fk => fk.PrimaryKitColorId);

            //modelBuilder.Entity<Team>()
            //    .HasOne(skc => skc.SecondaryKitColor)
            //    .WithMany(s => s.SecondaryKitTeams)
            //    .HasForeignKey(fk => fk.SecondaryKitColorId);



        }

       
    }
}
