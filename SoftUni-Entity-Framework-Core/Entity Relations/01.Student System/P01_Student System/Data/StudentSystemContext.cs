using P01_StudentSystem.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using P01_StudentSystem.Data.Models;

namespace P01_StudentSystem.Data 
{
    public class StudentSystemContext : DbContext
    {
        public StudentSystemContext()
        {

        }

        public StudentSystemContext(DbContextOptions<StudentSystemContext> options) 
            : base(options)
        {

        }

        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Homework> HomeworkSubmissions { get; set; }
        public virtual DbSet<Resource> Resources { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<StudentCourse> StudentCourses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Config.ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<Student>()
                .Property(p=>p.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Student>()
                .Property(p => p.PhoneNumber)
                .IsUnicode(false);

            modelBuilder.Entity<Course>()
                .Property(p => p.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Resource>()
                .Property(p => p.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Resource>()
                .Property(p => p.Url)
                .IsUnicode(false);

            modelBuilder.Entity<Homework>()
               .Property(p => p.Content)
               .IsUnicode(false);

            modelBuilder.Entity<StudentCourse>()
                .HasKey(k => new { k.CourseId, k.StudentId });


        }
    }
}
