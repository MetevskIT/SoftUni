using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
   public class Product
    {
        public Product(string name,decimal price)
        {
            Price = price;
            Name = name;
        }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
