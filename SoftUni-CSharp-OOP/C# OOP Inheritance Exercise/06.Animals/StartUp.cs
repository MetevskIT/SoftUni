using System;
using System.Collections.Generic;
namespace Animals

{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();
            string input = Console.ReadLine();

            while (input != "Beast!")
            {
                string[] info = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string name = info[0];
                int age = int.Parse(info[1]);
                string gender = info[2];
                Animal animal;

                if (age > 0)
                {
                    if (input == "Dog")
                    {
                        animal = new Dog(name, age, gender);
                    }
                    else if (input == "Cat")
                    {
                        animal = new Cat(name, age, gender);
                    }
                    else if (input == "Frog")
                    {
                        animal = new Frog(name, age, gender);
                    }
                    else if (input == "Tomcat")
                    {
                        animal = new Tomcat(name, age);
                    }
                    else if (input == "Kitten")
                    {
                        animal = new Kitten(name, age);
                    }
                    else
                    {
                        Console.WriteLine($"Invalid input!");

                        input = Console.ReadLine();

                        continue;
                    }
                }
                else
                {
                    Console.WriteLine($"Invalid input!");
                    input = Console.ReadLine();
                    continue;
                }
                animals.Add(animal);
                input = Console.ReadLine();
            }

            Console.WriteLine(string.Join(Environment.NewLine, animals));
        }
    }
}
