using System;
using System.Collections.Generic;

namespace CollectionHierarchy
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            AddCollection add = new AddCollection();
            AddRemoveCollection addRemove = new AddRemoveCollection();
            MyList myList = new MyList();
            string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            List<int> addCollResults = new List<int>();
            List<int> addRemCollResults = new List<int>();
            List<int> myListResults = new List<int>();
            foreach (var s in input)
            {
                addCollResults.Add(add.Add(s));
                addRemCollResults.Add(addRemove.Add(s));
                myListResults.Add(myList.Add(s));
            }

            int numberOfRemovals = int.Parse(Console.ReadLine());
            List<string> addRemCollRemoveResults = new List<string>();
            List<string> myListRemoveResults = new List<string>();
            for (int i = 0; i < numberOfRemovals; i++)
            {
                addRemCollRemoveResults.Add(addRemove.Remove());
                myListRemoveResults.Add(myList.Remove());
            }

            Console.WriteLine(string.Join(" ", addCollResults));
            Console.WriteLine(string.Join(" ", addRemCollResults));
            Console.WriteLine(string.Join(" ", myListResults));
            Console.WriteLine(string.Join(" ", addRemCollRemoveResults));
            Console.WriteLine(string.Join(" ", myListRemoveResults));
        }
    }
}
