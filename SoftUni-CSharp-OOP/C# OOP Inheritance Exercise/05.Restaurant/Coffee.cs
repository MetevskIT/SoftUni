using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    public class Coffee : HotBeverage
    {
        private const decimal CoffeeDefaultPrice = 3.50M;
        private const double CoffeeDefaultMilliliters = 50;
        public Coffee(string name, double caffeine) : base(name, CoffeeDefaultPrice, CoffeeDefaultMilliliters)
        {
            Caffeine = caffeine;
        }
        public double Caffeine { get; set; }
    }
}
