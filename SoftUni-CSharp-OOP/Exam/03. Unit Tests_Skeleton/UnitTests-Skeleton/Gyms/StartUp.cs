namespace Gyms
{
    using System;

    class StartUp
    {
        static void Main(string[] args)
        {
            Gym gym = new Gym("borba",3);
            gym.AddAthlete(new Athlete("ivo"));
            gym.AddAthlete(new Athlete("ficho"));
            gym.AddAthlete(new Athlete("veli"));
            gym.InjureAthlete("veli");
            
            Console.WriteLine(gym.Report());
        }
    }
}
