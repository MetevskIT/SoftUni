using System;
using System.Collections.Generic;
using System.Linq;

namespace FoodShortage
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<Citizen> citizens = new List<Citizen>();
            List<Rebel> rebels = new List<Rebel>();

            int n = int.Parse(Console.ReadLine());
           
            for (int i = 0; i < n; i++)
            {

                string[] input = Console.ReadLine().Split().ToArray();
                if (input.Length >= 4)
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string id = input[2];
                    string birthday = input[3];
                    Citizen curr = new Citizen(name, age, id, birthday);
                   citizens.Add(curr);
                }
                else
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string birthday = input[1];
                    Rebel curr = new Rebel(name, age, birthday);
                    rebels.Add(curr);

                }
              
                
            }
            string input2 = Console.ReadLine();
            while (input2!="End")
            {
                Citizen currCitizen = citizens.FirstOrDefault(b => b.Name == input2);                                    
                Rebel currRebel = rebels.FirstOrDefault(r => r.Name == input2);
                if (currCitizen != null)                                                                                      
                {                                                                                                             
                    currCitizen.BuyFood();                                                                                   
                }                                                                                                             
                else if (currRebel != null)                                                                                   
                {                                                                                                             
                    currRebel.BuyFood();                                                                                      
                }
                input2 = Console.ReadLine();

            }

            Console.WriteLine(citizens.Sum(f => f.Food) + rebels.Sum(f => f.Food));





        }
    }
}
