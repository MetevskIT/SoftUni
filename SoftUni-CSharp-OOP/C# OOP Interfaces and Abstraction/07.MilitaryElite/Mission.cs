using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Mission
    {
        private string state;
        public Mission(string state,string codeName)
        {
            CodeName = codeName;
            State = state;
        }
        public string CodeName { get; set; }
        public string State { 
           
            get=>state;

            set 
            {
                if (value!="inProgress"&&value!="Finished")
                {
                    throw new ArgumentException("asd");
                }
                state = value;
            }
        
        }
        public override string ToString()
        {
            return $"  Code Name: {CodeName} State: {State}";
        }
    }
}
