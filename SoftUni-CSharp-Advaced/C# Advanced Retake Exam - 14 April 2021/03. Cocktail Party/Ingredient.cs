﻿using System;
using System.Collections.Generic;
using System.Text;

namespace CocktailParty
{
   public class Ingredient
    {
        public Ingredient(string name, int alcohol, int quantity)
        {
            Name = name;
            Alcohol = alcohol;
            Quantity = quantity;
        }
        public string Name { get; set; }
        public int Alcohol { get; set; }
        public int 	Quantity { get; set; }

        public override string ToString()
        {
            StringBuilder str = new StringBuilder();
            str.AppendLine($"Ingredient: {Name}");
            str.AppendLine($"Quantity: {Quantity}");
            str.AppendLine($"Alcohol: {Alcohol}");
            return str.ToString().TrimEnd();
        }

    }

}
