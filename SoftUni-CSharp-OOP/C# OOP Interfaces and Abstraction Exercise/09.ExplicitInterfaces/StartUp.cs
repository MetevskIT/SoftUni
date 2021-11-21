using System;
using System.Linq;

namespace ExplicitInterfaces
{
    class StartUp
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
           
            while(input[0]!="End")
            {
              
                string name = input[0];
                string country = input[1];
                int age = int.Parse(input[2]);
                Citizen currCitizen = new Citizen(name, age, country);
                
                Console.WriteLine((currCitizen as IPerson).GetName());
                Console.WriteLine((currCitizen as IResident).GetName());

                input = Console.ReadLine().Split().ToArray();
            }
        }
    }
}
