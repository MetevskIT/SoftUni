using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Survivor
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOfCollectedTokens = 0;
            int opponentsTokens = 0;
            int rows = int.Parse(Console.ReadLine());
            string[][] area = new string[rows][];

            for (int i = 0; i < rows; i++)
            {
                string[] cols = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();
                area[i] = new string[cols.Length];
                for (int j = 0; j < cols.Length; j++)
                {
                    area[i][j] = cols[j];
                }
            }

            string[] commands = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();
            while (commands[0] != "Gong")
            {
                int row = int.Parse(commands[1]);
                int col = int.Parse(commands[2]);

                if (commands[0] == "Find" && isValidIndexes(row, col, area))
                {
                    countOfCollectedTokens++;
                    area[row][col] = "-";
                }

                else if (commands[0] == "Opponent" && isValidIndexes(row, col, area))
                {
                    string direction = commands[3];
                    if (direction == "up")
                    {

                        for (int i = 0; i < 4; i++)
                        {
                            if (area[row - i][col] == "T")
                            {
                                opponentsTokens++;
                                area[row - i][col] = "-";
                            }

                        }
                    }
                    else if (direction == "down")
                    {
                        for (int i = 0; i < 4; i++)
                        {
                            if (area[row + i][col] == "T")
                            {
                                opponentsTokens++;
                                area[row + i][col] = "-";
                            }

                        }
                    }
                    else if (direction == "left" && isValidIndexes(row, col, area))
                    {

                        if (col - 1 >= 0)
                        {
                            for (int i = 0; i < area[row].Length; i++)
                            {
                                if (area[row][col - i] == "T")
                                {
                                    opponentsTokens++;
                                    area[row][col - i] = "-";
                                }

                            }
                        }
                        else
                        {
                            if (area[row][col - 1] == "T")
                            {
                                opponentsTokens++;
                                area[row][col - 1] = "-";
                            }
                        }

                    }
                    else if (direction == "right")
                    {
                        if (area[row][col].Length >= 3)
                        {
                            for (int i = 0; i < 4; i++)
                            {
                                if (area[row][col + i] == "T")
                                {
                                    opponentsTokens++;
                                    area[row][col + i] = "-";
                                }

                            }
                        }
                        else
                        {
                            int n = area[row].Length - 1 - col;

                            for (int i = 0; i <= n; i++)
                            {
                                if (area[row][col + i] == "T")
                                {
                                    opponentsTokens++;
                                    area[row][col + i] = "-";
                                }

                            }
                        }

                    }
                }



                commands = Console.ReadLine().Split().ToArray();
            }




            foreach (var item in area)
            {
                Console.WriteLine(string.Join(" ", item));
            }

            Console.WriteLine($"Collected tokens: {countOfCollectedTokens}");
            Console.WriteLine($"Opponent's tokens: {opponentsTokens}");
        }
        public static bool isValidIndexes(int row, int col, string[][] area)
        {
            return row >= 0 && row < area.GetLength(0) && col >= 0 && col < area[row].Length;

        }
    }
}
