using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionHierarchy
{
   public class MyList:IAdd,IRemove
    {
        public MyList()
        {
            elements = new List<string>();
        }
        private List<string> elements;
        public int Used => elements.Count;
        public int Add(string a)
        {
            elements.Insert(0, a);
            return 0;

        }

        public string Remove()
        {
            string element = elements[0];
            elements.RemoveAt(0);
            return element;
        }
    }
}
