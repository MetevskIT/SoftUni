using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gym.Models.Gyms
{
    public abstract class Gym : IGym
    {
        private string name;
     
        public Gym(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            Equipment = new List<IEquipment>();
            Athletes = new List<IAthlete>();
        }
        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Gym name cannot be null or empty.");
                }
                this.name = value;
            }
        }

        public int Capacity { get; }

        public double EquipmentWeight => this.Equipment.Sum(x => x.Weight);
       

        public ICollection<IEquipment> Equipment { get; }

        public ICollection<IAthlete> Athletes { get; }

        public void AddAthlete(IAthlete athlete)
        {
            if (this.Capacity>Athletes.Count)
            {
                Athletes.Add(athlete);
            }
            else
            {
                throw new InvalidOperationException("Not enough space in the gym.");
            }
        }

        public void AddEquipment(IEquipment equipment)
        {
            Equipment.Add(equipment);
        }

        public void Exercise()
        {
            foreach (var item in Athletes)
            {
                item.Exercise();
            }
        }

        public string GymInfo()
        {
            StringBuilder sb = new StringBuilder();
            string athletes = this.Athletes.Count == 0 ? "No athletes" : string.Join(", ", this.Athletes.Select(x => x.FullName));
            sb.AppendLine($"{name} is a {GetType().Name}:");
            sb.Append($"Athletes: ");
            sb.AppendLine(athletes);
            sb.AppendLine($"Equipment total count: {Equipment.Count}");
            sb.AppendLine($"Equipment total weight: {EquipmentWeight:f2} grams");
            return sb.ToString().TrimEnd();
        }

        public bool RemoveAthlete(IAthlete athlete)
        {
            return Athletes.Remove(athlete);
        }
    }
}
