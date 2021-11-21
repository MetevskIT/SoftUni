using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Circle : IDrawable
    {
        private int radius;

        public Circle(int radius)
        {
            this.radius = radius;
        }
        public void Draw()
        {
            double first = radius - 0.4;
            double secound = radius + 0.4;
            for (double i = radius; i >= -radius; --i)
            {
                for (double j = -radius; j < secound; j += 0.5)
                {
                    double value = j * j + i * i;
                    if (value >= first * first && value <= secound * secound)
                    {
                        Console.Write('*');
                    }
                    else
                    {
                        Console.Write(' ');
                    }
                }

                Console.WriteLine();
            }
        }
    }
}
