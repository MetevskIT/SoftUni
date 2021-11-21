using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
   public class Repair
    {
        public Repair(string partName,int workedHours)
        {
            PartName = partName;
            WorkedHours = workedHours;
        }
        
        public string PartName { get; set; }
        public int WorkedHours { get; set; }
        public override string ToString()
        {
            return $"  Part Name: {PartName} Hours Worked: {WorkedHours}";
        }
    }
}
