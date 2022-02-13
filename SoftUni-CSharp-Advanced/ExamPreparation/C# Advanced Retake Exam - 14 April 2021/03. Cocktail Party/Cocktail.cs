using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace CocktailParty
{
   public class Cocktail
    {
        List<Ingredient> Ingredients;

        public Cocktail(string name, int capacity, int maxAlcoholLevel)
        {
            Name = name;
            Capacity = capacity;
            MaxAlcoholLevel = maxAlcoholLevel;
            Ingredients = new List<Ingredient>(capacity);
        }
        public string Name { get; set; }
        public int Capacity { get; set; }//maximum allowed numbre
        public int MaxAlcoholLevel { get; set; } //the maximum allowed amount of alcohol in the cocktail
        public int CurrentAlcoholLevel => Ingredients.Sum(i => i.Alcohol);
        public void Add(Ingredient ingredient) 
        {
            if (!Ingredients.Contains(ingredient) && Ingredients.Count + 1 <= Capacity && CurrentAlcoholLevel + ingredient.Alcohol <= MaxAlcoholLevel)
            {
                Ingredients.Add(ingredient);
            }
        }
        public bool Remove(string name) 
        {
            Ingredient player = Ingredients.Find(x => x.Name == name);
            if (player != null)
            {
                Ingredients.Remove(player);
                return true;
            }
            else
            {
                return false;
            }
        }
        public Ingredient FindIngredient(string name)
        {
            Ingredient player = Ingredients.Find(x => x.Name == name);
            if (player == null)
            {
                return null;
            }
            else
            {
                return player;
            }
        }
        public Ingredient GetMostAlcoholicIngredient()
        {
            Ingredient player = Ingredients.OrderByDescending(i=>i.Alcohol).FirstOrDefault();
            return player;
        }
        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Cocktail: {Name} - Current Alcohol Level: {CurrentAlcoholLevel}");
            foreach (var ingredient in Ingredients)
            {
                sb.AppendLine(ingredient.ToString().TrimEnd());
            }

            return sb.ToString().TrimEnd();
        }
    }
}
