using System;
using System.Collections.Generic;
using System.Linq;

namespace BorderControl
{
   public class StartUp
    {
        static void Main(string[] args)
        {
            List<IIdentif> fake = new List<IIdentif>();
            string[] input = Console.ReadLine().Split().ToArray();
            while (input[0]!="End")
            {
                if (input.Length > 2)
                {
                    string name = input[0];
                    int age = int.Parse(input[1]);
                    string id = input[2];
                    Citizen curr = new Citizen(name, age, id);
                    fake.Add(curr);
                }
                else
                {
                    string model = input[0];
                    
                    string id = input[1];
                    Robot curr = new Robot(model,id);
                    fake.Add(curr);
                }
                input = Console.ReadLine().Split().ToArray();
            }
            string lastNum = Console.ReadLine();
            fake = fake.Where(c => c.Id.EndsWith(lastNum)).ToList();           
             Console.WriteLine(string.Join(Environment.NewLine, fake.Select(i => i.Id)));
        }
    }
}
