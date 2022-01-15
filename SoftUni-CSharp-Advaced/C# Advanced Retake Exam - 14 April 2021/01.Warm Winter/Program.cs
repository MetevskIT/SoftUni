using System;
using System.Linq;
using System.Collections.Generic;

namespace _01.Warm_Winter
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> caps = new Stack<int>();
            Queue<int> shal = new Queue<int>();
            Queue<int> saved = new Queue<int>();
            int maxSum = 0;
            int[] stack = Console.ReadLine().Split().Select(int.Parse).ToArray();

            for (int i = 0; i < stack.Length; i++)
            {
                caps.Push(stack[i]);
            }

            int[] queue = Console.ReadLine().Split().Select(int.Parse).ToArray();
           
            for (int i = 0; i < queue.Length; i++)
           
            {
                shal.Enqueue(queue[i]);
            }
           
          
            while (caps.Count > 0 && shal.Count>0)
            {
                if (caps.Peek()>shal.Peek())
                {
                    int sum = caps.Pop() + shal.Dequeue();
                    saved.Enqueue(sum);
                    if (maxSum<sum)
                    {
                        maxSum = sum;
                    }
                    
                }
                else if (caps.Peek() == shal.Peek())
                {
                    shal.Dequeue();
                    int a = caps.Pop() + 1;
                    caps.Push(a);
                }
                else if (caps.Peek() < shal.Peek())
                {
                    caps.Pop();
                }
            }
            Console.WriteLine($"The most expensive set is: {maxSum}");
            Console.WriteLine(string.Join(" ",saved));

        }
    }
}
