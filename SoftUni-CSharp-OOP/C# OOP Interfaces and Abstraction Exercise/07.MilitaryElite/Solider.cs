﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public abstract class Solider : ISolider

    {
        public Solider(string id,string firstName,string lastName)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
        }
        public string Id { get; set; }
        public string FirstName { get ; set ; }
        public string LastName { get ; set ; }
    }
}
