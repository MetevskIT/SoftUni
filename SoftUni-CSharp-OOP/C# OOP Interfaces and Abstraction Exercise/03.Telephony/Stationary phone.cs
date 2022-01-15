using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Telephony
{
    public class Stationary_phone : ICall
    {
        public void Call(string number)
        {
            Console.WriteLine($"Dialing... {number}");
        }
    }
}
