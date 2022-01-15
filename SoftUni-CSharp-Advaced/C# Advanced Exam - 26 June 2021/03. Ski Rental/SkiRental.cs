using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace SkiRental
{
   public class SkiRental
    {
        List<Ski> data;

        public SkiRental(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            data = new List<Ski>();
        }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int Count => this.data.Count();
        public void Add(Ski ski)
        {
            if (Capacity>data.Count)
            {
                data.Add(ski);
            }
            
        }

        public bool Remove(string manufacturer, string model)
        {
            if (data.Any(x => x.Manufacturer == manufacturer) && data.Any(x => x.Model == model))
            {
                var targetSki = data
                    .Where(x => x.Manufacturer == manufacturer)
                    .FirstOrDefault(x => x.Model == model);
                data.Remove(targetSki);
                return true;
            }

            return false;
        }
        public Ski GetNewestSki()
        {
            if (data.Count>0)
            {
                var search = data.Select(x => x.Year).Max();
                var newestOne = data.FirstOrDefault(x => x.Year == search);
                return newestOne;
            }
            else
            {
                return null;
            }
        
        }
        public Ski GetSki(string manufacturer, string model)
        {
            bool firstCheck = data.Exists(x => x.Manufacturer == manufacturer);
            bool secondCheck = data.Exists(x => x.Model == model);

            if (firstCheck && secondCheck)
            {
                var targetSki = data
                    .Where(x => x.Manufacturer == manufacturer)
                    .FirstOrDefault(x => x.Model == model);
                return targetSki;
            }

            return null;
        }
        

        public string GetStatistics()
        {

            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"The skis stored in {this.Name}:");

            foreach (var ski in this.data)
            {
                sb.AppendLine(ski.ToString());
            }

            return sb.ToString().TrimEnd();


        }


    }
}
