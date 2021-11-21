using System;
using System.Collections.Generic;
using System.Text;

namespace _05.BirthdayCelebrations
{
    public class Pet : IBirthday
    {
        public Pet(string name,string birthday)
        {
            Name = name;
            Birthday = birthday;
        }
        public string Birthday { get; set; }
        public string Name { get; set; }
    }
}
