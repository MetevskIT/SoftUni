using P01_StudentSystem.Data;
using System;

namespace P01_StudentSystem 
{
    internal class StartUp
    {
        static void Main(string[] args)
        {
            using StudentSystemContext studentSystemContext = new StudentSystemContext();

            studentSystemContext.Database.EnsureCreated();
        }
    }
}
