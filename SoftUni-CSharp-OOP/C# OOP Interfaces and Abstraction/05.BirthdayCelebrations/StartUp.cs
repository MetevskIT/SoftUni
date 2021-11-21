using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.BirthdayCelebrations
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<IBirthday> fake = new List<IBirthday>();
            string[] input = Console.ReadLine().Split().ToArray();
            while (input[0] != "End")
            {
                if (input[0]=="Citizen")
                {
                    string name = input[1];
                    int age = int.Parse(input[2]);
                    string id = input[3];
                    string birthday = input[4];
                    Citizen curr = new Citizen(name, age, id,birthday);
                    fake.Add(curr);
                }
                else if (input[0]=="Pet")
                {
                      string name = input[1];
                     string birthday = input[2];
                    Pet curr = new Pet(name,birthday);
                    fake.Add(curr);

                }
                else 
                {
                    string model = input[1];

                    string id = input[2];
                   
                }
                input = Console.ReadLine().Split().ToArray();
            }
            string lastNum = Console.ReadLine();
            fake = fake.Where(c => c.Birthday.EndsWith(lastNum)).ToList();
            
                Console.WriteLine(string.Join(Environment.NewLine, fake.Select(i => i.Birthday)).TrimEnd());
            
            

        }
    }
}
