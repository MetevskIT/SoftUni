using System;
using System.Collections.Generic;
using System.Text;

namespace CustomStack
{
    class StackOfStrings:Stack<string>
    {
        public bool IsEmpty()
        {
            if (base.Count<=0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public Stack<string> AddRange(List<string> input)
        {
            foreach (var item in input)
            {
                base.Push(item);
            }
            return this;
        }
    
    }
}
