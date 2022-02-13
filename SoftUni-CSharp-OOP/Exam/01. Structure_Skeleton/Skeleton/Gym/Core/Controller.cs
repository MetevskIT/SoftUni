using Gym.Core.Contracts;
using Gym.Models.Athletes;
using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms;
using Gym.Models.Gyms.Contracts;
using Gym.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Gym.Core
{
    public class Controller : IController
    {
        private EquipmentRepository equipment = new EquipmentRepository();
        private List<IGym> gyms = new List<IGym>();
        public string AddAthlete(string gymName, string athleteType, string athleteName, string motivation, int numberOfMedals)
        {
            IAthlete athlete;
            if (athleteType=="Boxer")
            {
                athlete = new Boxer(athleteName, motivation, numberOfMedals);
            }
            else if (athleteType == "Weightlifter")
            {
                athlete = new Weightlifter(athleteName, motivation, numberOfMedals);
            }
            else
            {
                throw new InvalidOperationException("Invalid athlete type.");
            }
         
            IGym gym = this.gyms.Find(x => x.Name == gymName);
           
            
            if (athleteType=="Boxer" && gym.GetType().Name== "WeightliftingGym")
            {
                return "The gym is not appropriate.";
            }
            else if (athleteType == "Weightlifter" && gym.GetType().Name == "BoxingGym")
            {
                return "The gym is not appropriate.";
            }
            else
            {
                gym.AddAthlete(athlete);
                
                return $"Successfully added {athleteType} to {gymName}.";
            }
        }

        public string AddEquipment(string equipmentType)
        {
            IEquipment equipment;
            if (equipmentType== "BoxingGloves")
            {
                equipment = new BoxingGloves();
            }
            else if (equipmentType == "Kettlebell")
            {
                equipment = new Kettlebell();
            }
            else
            {
                throw new InvalidOperationException("Invalid equipment type.");
            }
            this.equipment.Add(equipment);
            return $"Successfully added {equipmentType}.";


        }

        public string AddGym(string gymType, string gymName)
        {
            IGym gym;
            if (gymType == "BoxingGym")
            {
                gym = new BoxingGym(gymName);
                
            } 
            else if (gymType == "WeightliftingGym")
            {
                gym = new WeightliftingGym(gymName);
               
            }
            else
            {
                throw new InvalidOperationException("Invalid gym type.");
            }
            this.gyms.Add(gym);
            return $"Successfully added {gymType}.";
        }
       

        public string EquipmentWeight(string gymName)
        {
            IGym gym = this.gyms.Find(a => a.Name == gymName);
           
            return $"The total weight of the equipment in the gym {gymName} is {gym.EquipmentWeight:f2} grams.";
        }

        public string InsertEquipment(string gymName, string equipmentType)
        {
            IEquipment equipment = this.equipment.FindByType(equipmentType);

            if (equipment is null)
            {
                throw new InvalidOperationException($"There isn’t equipment of type {equipmentType}.");
            }

            IGym gym = this.gyms.Find(a => a.Name == gymName);
            gym.AddEquipment(equipment);
            this.equipment.Remove(equipment);
            return $"Successfully added {equipmentType} to {gymName}.";
        }

        public string Report()
        {
            StringBuilder sb = new StringBuilder();

            foreach (var gym in this.gyms)
            {
                sb.AppendLine(gym.GymInfo());
            }

            return sb.ToString().Trim();
        }

        public string TrainAthletes(string gymName)
        {
            IGym gym = this.gyms.Find(x => x.Name == gymName);
            gym.Exercise();
            return $"Exercise athletes: {gym.Athletes.Count}.";

        }
    }
}
