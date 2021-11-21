using System;
using System.Collections.Generic;
using System.Text;

namespace FoodShortage
{
   public interface IBuyer
    {
        void BuyFood();
        public int Food { get; set; }
    }
}
