using System;
using System.Collections.Generic;
using System.Text;

namespace FoodShortage
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
