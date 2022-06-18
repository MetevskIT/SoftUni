SELECT TOP(10) [FirstName],[LastName],[DepartmentID] FROM [Employees] AS s
WHERE [Salary]>(SELECT AVG([Salary]) FROM [Employees] AS f
WHERE [f].[DepartmentID]=[s].[DepartmentID]
GROUP BY [DepartmentID])
ORDER BY s.[DepartmentID]