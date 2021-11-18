using System;
using System.Collections.Generic;
using System.Text;

namespace PersonsInfo
{
    public class Person
    {
        public Person(string firstName, string lasName, int age,decimal solary)
        {
            FirstName = firstName;
            LastName = lasName;
            Age = age;
            Solary = solary;
        }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public int Age { get; private set; }
        public decimal Solary { get; private set; }

        public void IncreaseSalary(decimal percentage)
        {
            if (this.Age > 30)
            {
                this.Solary += this.Solary * percentage / 100;
            }
            else
            {
                this.Solary += this.Solary * percentage / 200;
            }


        }
        public override string ToString()
        {
            return $"{FirstName} {LastName} receives {Solary:f2} leva.";
        }
    }
}
