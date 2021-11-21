using System;
using System.Linq;

namespace _03.Telephony
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string[] numbers = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();
            string[] urls = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();
            for (int i = 0; i < numbers.Length; i++)
            {
                string number = numbers[i];
                if (!number.All(x => char.IsDigit(x)))
                {
                    Console.WriteLine("Invalid number!");
                    continue;
                }
                if (number.Length==7||number.Length==10)
                {
                    if (number.Length==7)
                    {
                        ICall curr = new Stationary_phone();
                        curr.Call(number);
                    }
                    else
                    {
                        IBrowse curr = new Smartphone();
                        curr.Call(number);
                    }
                }
                else
                {
                    Console.WriteLine("Invalid number!");
                    continue;
                }
            }
            for (int i = 0; i < urls.Length; i++)
            {
                string url = urls[i];
                if (url.Any(x=>char.IsDigit(x)))
                {
                    Console.WriteLine("Invalid URL!");
                }
                else
                {
                    IBrowse curr = new Smartphone();
                    curr.Browse(url);
                    continue;
                }
            }
        }
    }
}
