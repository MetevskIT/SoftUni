CREATE PROC usp_EmployeesBySalaryLevel (@level VARCHAR(7))
AS
BEGIN
SELECT [FirstName] AS [First Name], [LastName] AS [Last Name] FROM [Employees]
WHERE @level = dbo.ufn_GetSalaryLevel([Salary])
END