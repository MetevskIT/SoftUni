using Microsoft.EntityFrameworkCore;
using SoftUni.Data;
using SoftUni.Models;
using System;
using System.Linq;
using System.Text;

namespace SoftUni
{
    public class StartUp
    {
        static void Main(string[] args)
        {
           
            using (SoftUniContext context = new SoftUniContext())
            {
                //Problem 03 - Employees Full Information
                //Console.WriteLine(GetEmployeesFullInformation(context));

                //Problem 04 - Employees with Salary Over 50 000
                //Console.WriteLine(GetEmployeesWithSalaryOver50000(context));

                //Problem 05 - Employees from Research and Development
                //Console.WriteLine(GetEmployeesFromResearchAndDevelopment(context));

                //Problem 06 - Adding a New Address and Updating Employee
                //Console.WriteLine(AddNewAddressToEmployee(context));

                //Problem 07 - Employees and Projects
                //Console.WriteLine(GetEmployeesInPeriod(context));

                //Problem 08 - Addresses by Town
                //Console.WriteLine(GetAddressesByTown(context));

                //Problem 09 - Employee 147
                //Console.WriteLine(GetEmployee147(context));

                //Problem 10 - Departments with More Than 5 Employees
                //Console.WriteLine(GetDepartmentsWithMoreThan5Employees(context));

                //Problem 11 - Find Latest 10 Projects
                //Console.WriteLine(GetLatestProjects(context));

                //Problem 12 - Increase Salaries
                //Console.WriteLine(IncreaseSalaries(context));

                //Problem 13 - Find Employees by First Name Starting With Sa
                //Console.WriteLine(GetEmployeesByFirstNameStartingWithSa(context));

                //Problem 14 - Delete Project by Id
                //Console.WriteLine(DeleteProjectById(context));

                //Problem 15 - Remove Town
                //Console.WriteLine(RemoveTown(context));
            }

        }


        public static string GetEmployeesFullInformation(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Select(e => new
                {
                    employeeId = e.EmployeeId,
                    firstName = e.FirstName,
                    lastName = e.LastName,
                    middleName = e.MiddleName,
                    jobTitle = e.JobTitle,
                    salary = $"{e.Salary:f2}"

                })
                .OrderBy(e => e.employeeId)
                .ToArray();

            foreach (var employee in employees)
            {
                output.AppendLine($"{employee.firstName} {employee.lastName} {employee.middleName} {employee.jobTitle} {employee.salary}");
            }
            return output.ToString().TrimEnd();
        
        }


        public static string GetEmployeesWithSalaryOver50000(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Select(e =>new
                {
                    firstName = e.FirstName,
                    salary = e.Salary

                })
                .Where(e=>e.salary>50000)
                .OrderBy(e=>e.firstName);

            foreach (var e in employees)
            {
                output.AppendLine($"{e.firstName} - {e.salary:f2}");
            }

            return output.ToString().TrimEnd();
        }


        public static string GetEmployeesFromResearchAndDevelopment(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Select(e => new
                {
                    firstName = e.FirstName,
                    lastName = e.LastName,
                    departmentName = e.Department.Name,
                    salary = e.Salary
                })
                .ToArray()
                .Where(e => e.departmentName == "Research and Development")
                .OrderBy(e => e.salary)
                .ThenByDescending(e => e.firstName)
                .ToArray();

            foreach (var e in employees)
            {
                output.AppendLine($"{e.firstName} {e.lastName} from {e.departmentName} - ${e.salary:f2}");
            }
            return output.ToString().TrimEnd();
        
        }

        
        public static string AddNewAddressToEmployee(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            Address newAddress = new Address();
            newAddress.AddressText = "Vitoshka 15";
            newAddress.TownId = 4;

            var employee = context.Employees.First(e => e.LastName == "Nakov");
            employee.Address = newAddress;

            context.SaveChanges();

            var employees = context.Employees
                .Select(e => new
                {
                    addressText = e.Address.AddressText,
                    addressId=e.AddressId
                })
                .OrderByDescending(e=>e.addressId)
                .Take(10)
                .ToArray();

            foreach (var e in employees)
            {
                output.AppendLine($"{e.addressText}");
            }
            return output.ToString().TrimEnd();
        }


        public static string GetEmployeesInPeriod(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Include(e => e.Manager)
                .Include(e => e.EmployeesProjects)
                .ThenInclude(ep => ep.Project)
                .Where(x => x.EmployeesProjects.Any(epx => epx.Project.StartDate.Year >= 2001 && epx.Project.StartDate.Year <= 2003))
                .Select(x => new
                {
                    firstName = x.FirstName,
                    lastName = x.LastName,
                    managerFirstName = x.Manager.FirstName,
                    managerLastName = x.Manager.LastName,
                    Projects = x.EmployeesProjects.Select(p => new
                    {
                        projectName = p.Project.Name,
                        startDate = p.Project.StartDate,
                        endDate = p.Project.EndDate
                    })
                })
                .Take(10)
                .ToList();

            foreach (var emp in employees)
            {
                output.AppendLine($"{emp.firstName} {emp.lastName} - Manager: {emp.managerFirstName} {emp.managerLastName}");
                foreach (var projects in emp.Projects)
                {
                    output.AppendLine($"--{projects.projectName} - {projects.startDate.ToString("M/d/yyyy h:mm:ss tt")} - {(projects.endDate.HasValue ? projects.endDate.Value.ToString("M/d/yyyy h:mm:ss tt") : "not finished")}");
                }
            }

            return output.ToString().TrimEnd();
        }


        public static string GetAddressesByTown(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var addresses = context.Addresses
                .Include(a => a.Town)
                .Include(a => a.Employees)
                .Select(ad => new
                {
                    townName = ad.Town.Name,
                    addressName = ad.AddressText,
                    count = ad.Employees.Count()
                })
                .Take(10)
                .ToList()
                .OrderByDescending(a=>a.count)
                .ThenBy(a=>a.townName)
                .ThenBy(a=>a.addressName);

            foreach (var address in addresses)
            {
                output.AppendLine($"{address.addressName}, {address.townName} - {address.count} employees");
            }

            return output.ToString().TrimEnd();
        }


        public static string GetEmployee147(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employee = context.Employees
                .Include(e => e.EmployeesProjects)
                .ThenInclude(ep => ep.Project)
                .Where(e => e.EmployeeId == 147)
                .First();

           
                output.AppendLine($"{employee.FirstName} {employee.LastName} - {employee.JobTitle}");
               
                foreach (var project in employee.EmployeesProjects.OrderBy(p =>p.Project.Name))
                {
                    output.AppendLine($"{project.Project.Name}");
                }
            

            return output.ToString().TrimEnd();
        }


        public static string GetDepartmentsWithMoreThan5Employees(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var departments = context.Departments
                .Include(d => d.Employees)
                .Include(d => d.Manager)
                .Where(d => d.Employees.Count() > 5)
                //.Select(d => new
                //{
                //    DepartmentName = d.Name,
                //    ManagerFirstName = d.Manager.FirstName,
                //    ManagerLastName = d.Manager.LastName,
                //    EmployeesCount = d.Employees.Count(),
                //    Employees = d.Employees.Select(e => new
                //    {
                //        EmployeeFirstName = e.FirstName,
                //        EmployeeLastName = e.LastName,
                //        EmployeeJobTitle = e.JobTitle
                //    })
                //    .OrderBy(e => e.EmployeeFirstName)
                //    .ThenBy(e => e.EmployeeLastName)
                //    .ToList()
                //})
                .OrderBy(x => x.Employees.Count())
                .ThenBy(x => x.Name)
                .ToList();

            foreach (var dep in departments)
            {

                output.AppendLine($"{dep.Name} - {dep.Manager.FirstName} {dep.Manager.LastName}");

                foreach (var emp in dep.Employees.OrderBy(emp=>emp.FirstName).ThenBy(emp=>emp.LastName))
                {
                    output.AppendLine($"{emp.FirstName} {emp.LastName} - {emp.JobTitle}");
                }
            }
            return output.ToString().TrimEnd();
        }


        public static string GetLatestProjects(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var projects = context.Projects
                .OrderByDescending(p => p.StartDate)
                .Take(10)
                .ToList()
            .OrderBy(p => p.Name)
            .ToList();

            foreach (var p in projects)
            {
                output.AppendLine(p.Name);
                output.AppendLine(p.Description);
                output.AppendLine(p.StartDate.ToString("M/d/yyyy h:mm:ss tt"));

            }
            return output.ToString().TrimEnd();

        }


        public static string IncreaseSalaries(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Include(e=>e.Department)
                .Where(e => e.Department.Name == "Engineering" || e.Department.Name == "Tool Design" || e.Department.Name == "Marketing" || e.Department.Name == "Information Services")
                .OrderBy(e => e.FirstName)
                .ThenBy(e => e.LastName)
                .ToList();

            foreach (var emp in employees)
            {
                emp.Salary += emp.Salary * 0.12M;
                output.AppendLine($"{emp.FirstName} {emp.LastName} (${emp.Salary:f2})");
            }
            context.SaveChanges();

            return output.ToString().TrimEnd();
        }


        public static string GetEmployeesByFirstNameStartingWithSa(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var employees = context.Employees
                .Where(e => e.FirstName.ToLower().StartsWith("sa"))
                .OrderBy(e => e.FirstName)
                .ThenBy(e => e.LastName)
                .ToList();

            foreach (var emp in employees)
            {
                output.AppendLine($"{emp.FirstName} {emp.LastName} - {emp.JobTitle} - (${emp.Salary:f2})");
            }

            return output.ToString().TrimEnd();

        }


        public static string DeleteProjectById(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var projectRelation = context.EmployeesProjects
                .Where(e => e.ProjectId == 2)
                .ToList();

            context.EmployeesProjects.RemoveRange(projectRelation);
            context.SaveChanges();

            var removeProject = context.Projects
                .Where(rp => rp.ProjectId == 2)
                .First();

            context.Projects.Remove(removeProject);
            context.SaveChanges();

            var projects = context.Projects
                .Take(10)
                .ToList();

            foreach (var p in projects)
            {
                output.AppendLine($"{p.Name}");
            }
            return output.ToString().TrimEnd();
        }


        public static string RemoveTown(SoftUniContext context)
        {
            StringBuilder output = new StringBuilder();

            var townDeleteId = context.Towns
                .Where(t => t.Name == "Seattle")
                .FirstOrDefault();
            

            var addresses = context.Addresses
                .Where(a => a.TownId == townDeleteId.TownId)
                .ToList();

            var employeess = context.Employees
                .Where(e=>addresses.Contains(e.Address))
                .ToList();


            int count = addresses.Count();

            context.Towns.Remove(townDeleteId);
            context.SaveChanges();

            context.Addresses.RemoveRange(addresses);
            context.SaveChanges();

            employeess.ForEach(e => e.AddressId = null);
            context.SaveChanges();

            output.AppendLine($"{count} addresses in Seattle were deleted");
            return output.ToString().TrimEnd();

        }
    }

}
