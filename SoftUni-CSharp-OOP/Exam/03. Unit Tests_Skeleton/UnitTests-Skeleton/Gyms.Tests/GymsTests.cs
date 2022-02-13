
namespace Tests
{
    using NUnit.Framework;
    using System;

    public class GymsTests
    {
        [Test]
        public void ConstructorTest()
        {
            Gym gym = new Gym("BoxingClub", 50);
            Assert.AreEqual("BoxingClub", gym.Name);
            Assert.AreEqual(50, gym.Capacity);
        }

        [Test]
        public void NameExceptionTest()
        {
            Assert.Throws<ArgumentNullException>(() => new Gym(null, 20));
        }
        [Test]
        public void CapacityExceptionTest()
        {
            Assert.Throws<ArgumentException>(() => new Gym("freeFitness", -1));
        }
        [Test]
        public void AddAthleteExceptionTest()
        {
            Gym gym = new Gym("BoxingClub", 1);
            gym.AddAthlete(new Athlete("ivo"));
            Assert.Throws<InvalidOperationException>(() => gym.AddAthlete(new Athlete("vankata")));

        }
        [Test]
        public void CountTesting()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            gym.AddAthlete(new Athlete("ficho"));
            gym.AddAthlete(new Athlete("veli"));

            Assert.AreEqual(3, gym.Count);

        }
        [Test]
        public void RemoveWithIncorrectInput()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            Assert.Throws<InvalidOperationException>(()=>gym.RemoveAthlete("ivvo"));
        }
        [Test]
        public void RemoveWithcorrectInput()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            gym.RemoveAthlete("ivo");
            Assert.AreEqual(0, gym.Count);
            
        }
        [Test]
        public void InjureWithIncorrectInput()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            Assert.Throws<InvalidOperationException>(() => gym.InjureAthlete("ivvo"));
        }
        [Test]
        public void InjureWithcorrectInput()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            
            Assert.AreEqual(true, gym.InjureAthlete("ivo").IsInjured);
          

        }
        [Test]
        public void ReportTest()
        {
            Gym gym = new Gym("BoxingClub", 3);
            gym.AddAthlete(new Athlete("ivo"));
            gym.AddAthlete(new Athlete("ficho"));
            gym.AddAthlete(new Athlete("veli"));
            gym.InjureAthlete("veli");

            string persons = "Active athletes at BoxingClub: ivo, ficho";
            
            Assert.AreEqual(persons, gym.Report());


        }
    }
}

