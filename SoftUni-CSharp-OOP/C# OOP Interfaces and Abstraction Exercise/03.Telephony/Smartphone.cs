using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Telephony
{
    public class Smartphone : IBrowse

    {
        public void Browse(string url)
        {
            Console.WriteLine($"Browsing: {url}!");
        }

        public void Call(string number)
        {
            Console.WriteLine($"Calling... {number}");
        }
    }
}
