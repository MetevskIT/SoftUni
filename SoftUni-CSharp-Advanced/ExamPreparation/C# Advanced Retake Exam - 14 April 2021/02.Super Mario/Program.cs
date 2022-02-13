using System;
using System.Linq;
using System.Collections.Generic;

namespace _02.Super_Mario
{
    class Program
    {
        static void Main(string[] args)
        {
            //read and write
            int health = int.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            if (n == 0)
            {
                return;
            }
            char[][] matrix = new char[n][];

            int marioROW = 0;
            int marioCOL = 0;

            for (int i = 0; i < n; i++)
            {
                string line = Console.ReadLine();
                char[] arr = line.ToArray();
                matrix[i] = arr;
            }

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    if (matrix[i][j] == 'M')
                    {
                        marioROW = i;
                        marioCOL = j;
                        break;
                    }
                }
            }



            //  logic(main)
            string[] commands = Console.ReadLine().Split().ToArray();
            while (health > 0)
            {
                int row = int.Parse(commands[1]);
                int col = int.Parse(commands[2]);
                matrix[row][col] = 'B';
                matrix[marioROW][marioCOL] = '-';

                health--;

                if (commands[0] == "W" && marioROW - 1 >= 0)
                {
                    marioROW--;
                }
                else if (commands[0] == "S" && marioROW + 1 < matrix.Length)
                {
                    marioROW++;
                }
                else if (commands[0] == "A" && marioCOL - 1 >= 0)
                {
                    marioCOL--;
                }
                else if (commands[0] == "D" && marioCOL + 1 < matrix[marioROW].Length)
                {
                    marioCOL++;
                }

                if (matrix[marioROW][marioCOL] == 'P')
                {
                    matrix[marioROW][marioCOL] = '-';
                    Console.WriteLine($"Mario has successfully saved the princess! Lives left: {health}");
                    break;
                }
                else if (matrix[marioROW][marioCOL] == 'B')
                {
                    health -= 2;

                    if (health <= 0)
                    {
                        Console.WriteLine($"Mario died at {marioROW};{marioCOL}.");
                        matrix[marioROW][marioCOL] = 'X';
                        break;
                    }

                    matrix[marioROW][marioCOL] = 'M';
                }
                else
                {
                    matrix[marioROW][marioCOL] = 'M';
                }

                if (health <= 0)
                {
                    Console.WriteLine($"Mario died at {marioROW};{marioCOL}.");
                    matrix[marioROW][marioCOL] = 'X';
                    break;
                }

                commands = Console.ReadLine().Split().ToArray();
            }




            //  print


            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    Console.Write(matrix[i][j]);
                }
                Console.WriteLine();
            }
        }
       
    }
}