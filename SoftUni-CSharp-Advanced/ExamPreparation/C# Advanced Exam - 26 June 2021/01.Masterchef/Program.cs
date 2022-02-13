using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Masterchef
{
    class Program
    {
        static void Main(string[] args)
        {

            Queue<int> vs = new Queue<int>();
            Stack<int> vs1 = new Stack<int>();
            int dipping = 0;
            int greeensalad = 0;
            int chokolate = 0;
            int lobster = 0;
            int[] inputForVs = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int[] inputForVs1 = Console.ReadLine().Split().Select(int.Parse).ToArray();
            for (int i = 0; i < inputForVs.Length; i++)
            {
                vs.Enqueue(inputForVs[i]);
            }
            for (int i = 0; i < inputForVs1.Length; i++)
            {
                vs1.Push(inputForVs1[i]);
            }

            while (vs.Count > 0 && vs1.Count > 0)
            {
            

                
                    if (vs.Peek() * vs1.Peek() == 150)
                    {
                        dipping++;
                        vs.Dequeue();
                        vs1.Pop();
                    }
                    else if (vs.Peek() * vs1.Peek() == 250)
                    {
                        greeensalad++;
                        vs.Dequeue();
                        vs1.Pop();
                    }
                    else if (vs.Peek() * vs1.Peek() == 300)
                    {
                        chokolate++;
                        vs.Dequeue();
                        vs1.Pop();
                    }
                    else if (vs.Peek() * vs1.Peek() == 400)
                    {
                        lobster++;
                        vs.Dequeue();
                        vs1.Pop();
                    }
                    else if (vs.Peek() == 0)
                    {
                        vs.Dequeue();
                    }
                
               
                else
                {
                    vs1.Pop();
                    int current = vs.Dequeue() + 5;

                    vs.Enqueue(current);

                }
            }


            if (dipping >= 1 && greeensalad >= 1 && chokolate >= 1 && lobster >= 1)
            {
                Console.WriteLine("Applause! The judges are fascinated by your dishes!");
                Console.WriteLine($"# Chocolate cake --> {chokolate}");
                Console.WriteLine($"# Dipping sauce --> {dipping}");
                Console.WriteLine($"# Green salad --> {greeensalad}");
                Console.WriteLine($"# Lobster --> {lobster}");

            }


            else
            {
                Console.WriteLine("You were voted off. Better luck next year.");

                if (vs.Sum() > 0)
                {
                    Console.WriteLine($"Ingredients left: {vs.Sum()}");
                }

                if (chokolate >= 1)
                {
                    Console.WriteLine($" # Chocolate cake --> {chokolate}");
                }
                if (dipping >= 1)
                {
                    Console.WriteLine($" # Dipping sauce --> {dipping}");
                }
                if (greeensalad >= 1)
                {
                    Console.WriteLine($" # Green salad --> {greeensalad}");
                }
                if (lobster >= 1)
                {
                    Console.WriteLine($" # Lobster --> {greeensalad}");
                }
            }
            
        }
    }
}