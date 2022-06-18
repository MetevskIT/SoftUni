CREATE PROC usp_GetEmployeesFromTown (@string VARCHAR(20))
AS
BEGIN
SELECT [FirstName] AS [First Name],[LastName] AS [Last Name] FROM [Employees] AS e
LEFT JOIN [Addresses] AS a 
ON e.[AddressID]=a.[AddressID]
LEFT JOIN [Towns] AS t
ON t.[TownID]=a.[TownID]
WHERE t.[Name]=@string
END

