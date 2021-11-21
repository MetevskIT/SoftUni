using System;
using System.Collections.Generic;
using System.Text;

namespace _05.BirthdayCelebrations
{
    public class Robot : IIdentif
    {
        public Robot(string model, string id)
        {
            Model = model;
            Id =
                id;
        }
        public  string Model { get; set; }
        public string Id { get; set; }

    }
}
